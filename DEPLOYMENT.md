# Sveltoz Website — Deployment Reference

Deployment notes for the Sveltoz marketing site on the Windows server.
First deployed: **2026-05-15**.

---

## 1. Architecture

```
Internet
   │
   │  http://182.70.127.140:8080
   ▼
Router (NAT port forward: WAN 8080 → 192.168.1.23:8080)
   │
   ▼
Windows Server (192.168.1.23)
   │
   ├─ Apache (XAMPP) on port 8080
   │     DocumentRoot: C:\xampp82\htdocs\sveltoz-website\sveltoz-website-UI
   │     Reverse-proxies /send-email → 127.0.0.1:5000
   │
   └─ Node.js (Express) on port 5000
         Runs as Windows service "SveltozAPI" via NSSM
         Working dir: C:\xampp82\htdocs\sveltoz-website\sveltoz-website-server
```

- Apache also still listens on **port 80** for any pre-existing XAMPP sites — **untouched**.
- Port **5000 is internal only** (not exposed to the internet). Apache proxies to it on `127.0.0.1`.

---

## 2. Paths

| What | Path |
|---|---|
| Frontend (built Vite output) | `C:\xampp82\htdocs\sveltoz-website\sveltoz-website-UI\` |
| Backend (Express server) | `C:\xampp82\htdocs\sveltoz-website\sveltoz-website-server\` |
| Backend `.env` | `C:\xampp82\htdocs\sveltoz-website\sveltoz-website-server\.env` |
| NSSM binary | `C:\nssm\nssm-2.24\win64\nssm.exe` |
| Apache main config | `C:\xampp82\apache\conf\httpd.conf` |
| Apache vhosts | `C:\xampp82\apache\conf\extra\httpd-vhosts.conf` |
| Apache config backups | `httpd.conf.bak`, `httpd-vhosts.conf.bak` (same folders) |
| Backend stdout log | `C:\xampp82\htdocs\sveltoz-website\sveltoz-website-server\stdout.log` |
| Backend stderr log | `C:\xampp82\htdocs\sveltoz-website\sveltoz-website-server\stderr.log` |

---

## 3. Deploying updates

### 3a. Frontend update

1. Locally: `npm run build` to produce a fresh `dist/`.
2. Zip the **contents** of `dist/` (not the folder itself).
3. On the server, **replace everything** in `C:\xampp82\htdocs\sveltoz-website\sveltoz-website-UI\` with the new files.
4. No Apache restart needed for static file changes — just hard-refresh the browser.

> ⚠️ Make sure `src/components/Contact.jsx` uses the **relative URL** `"/send-email"` (NOT `http://localhost:5000/send-email`). Otherwise the Contact form will only work on the dev's laptop.

### 3b. Backend update

1. Replace `server.js` (and `package.json` if dependencies changed).
2. If `package.json` changed, run on the server:
   ```cmd
   cd /d C:\xampp82\htdocs\sveltoz-website\sveltoz-website-server
   npm install
   ```
3. Restart the service:
   ```cmd
   C:\nssm\nssm-2.24\win64\nssm.exe restart SveltozAPI
   ```

---

## 4. Backend service (NSSM) management

| Action | Command |
|---|---|
| Start | `C:\nssm\nssm-2.24\win64\nssm.exe start SveltozAPI` |
| Stop | `C:\nssm\nssm-2.24\win64\nssm.exe stop SveltozAPI` |
| Restart | `C:\nssm\nssm-2.24\win64\nssm.exe restart SveltozAPI` |
| Edit (opens GUI) | `C:\nssm\nssm-2.24\win64\nssm.exe edit SveltozAPI` |
| Remove service | `C:\nssm\nssm-2.24\win64\nssm.exe remove SveltozAPI confirm` |
| Status | `sc query SveltozAPI` |
| GUI | `services.msc` → "Sveltoz API" |

The service has **Startup type: Automatic** — it starts on Windows boot.

### Service config (already set)
- **Application path**: Node.js binary (`where node`)
- **Startup directory**: `C:\xampp82\htdocs\sveltoz-website\sveltoz-website-server`
- **Arguments**: `server.js`
- **Stdout/stderr**: redirected to log files (see Paths section)

---

## 5. Apache configuration

### 5a. Changes made to `httpd.conf`

1. Added a second listen port after `Listen 80`:
   ```
   Listen 8080
   ```
2. Uncommented one module (others were already enabled in this XAMPP install):
   ```
   LoadModule proxy_http_module modules/mod_proxy_http.so
   ```

Already-enabled modules used by this setup:
- `mod_proxy`
- `mod_rewrite`
- `Include conf/extra/httpd-vhosts.conf`

### 5b. VirtualHost added to `httpd-vhosts.conf`

```apache
<VirtualHost *:8080>
    DocumentRoot "C:/xampp82/htdocs/sveltoz-website/sveltoz-website-UI"
    ServerName sveltoz.local

    <Directory "C:/xampp82/htdocs/sveltoz-website/sveltoz-website-UI">
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ProxyPreserveHost On
    ProxyPass /send-email http://127.0.0.1:5000/send-email
    ProxyPassReverse /send-email http://127.0.0.1:5000/send-email

    ErrorLog "logs/sveltoz-error.log"
    CustomLog "logs/sveltoz-access.log" common
</VirtualHost>
```

### 5c. Validating & restarting Apache

Before restarting, **always validate**:
```cmd
C:\xampp82\apache\bin\httpd.exe -t
```
Must say `Syntax OK`. If not — don't restart, fix the error or restore the `.bak` files.

Restart via XAMPP Control Panel (Stop → Start Apache).

---

## 6. Networking

### 6a. Windows Firewall
Inbound TCP **8080** allowed via:
```cmd
netsh advfirewall firewall add rule name="Sveltoz HTTP 8080" dir=in action=allow protocol=TCP localport=8080
```

> Port 5000 does **not** need a firewall rule — Apache talks to it on `127.0.0.1`, which bypasses the firewall.

### 6b. Router port forwarding
At `http://192.168.1.1/nat/port-forwarding`:

| Field | Value |
|---|---|
| WAN Interface | WAN 0 |
| Protocol | TCP |
| Start Port | 8080 |
| End Port | 8080 |
| Local IP Address | 192.168.1.23 |
| Start Port Local | 8080 |
| End Port Local | 8080 |

Public URL: **http://182.70.127.140:8080/**

> If the public IP changes (not static), set up dynamic DNS or get a static IP from the ISP.

---

## 7. Environment variables

`.env` (in backend folder) must contain:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=<sender-email>
SMTP_PASS=<app-password>
HR_EMAIL=dipalip@sveltoz.com
```

After editing `.env`, restart the service:
```cmd
C:\nssm\nssm-2.24\win64\nssm.exe restart SveltozAPI
```

---

## 8. Troubleshooting

### Site loads but Contact form fails ("Server Error ❌")
1. Check service is up: `sc query SveltozAPI`
2. Check port 5000 listening: `netstat -ano | findstr ":5000"`
3. Check stderr: `type C:\xampp82\htdocs\sveltoz-website\sveltoz-website-server\stderr.log`
4. Test Node directly on the server: open browser → `http://localhost:5000/send-email` (will say "Cannot GET", which means Node is up — only POST is supported)

### Site doesn't load at all
1. Apache running? Check XAMPP Control Panel.
2. Port 8080 listening? `netstat -ano | findstr ":8080"`
3. Apache error log: `C:\xampp82\apache\logs\sveltoz-error.log`

### External access fails but LAN works
- Router port forward not saved/applied.
- ISP blocking inbound port. Try a different external port.
- Public IP changed.

### Apache won't start after config edit
1. Run `C:\xampp82\apache\bin\httpd.exe -t` to see the syntax error.
2. If unfixable, restore the backup:
   ```cmd
   copy /Y C:\xampp82\apache\conf\httpd.conf.bak C:\xampp82\apache\conf\httpd.conf
   copy /Y C:\xampp82\apache\conf\extra\httpd-vhosts.conf.bak C:\xampp82\apache\conf\extra\httpd-vhosts.conf
   ```

---

## 9. Known issues / to-do

- `bg.jpg` is referenced in `About.jsx` and `Mission.jsx` but missing from `public/` — backgrounds broken on those sections. Dev to add the file.
- No HTTPS yet — site is plain HTTP. Add SSL (Let's Encrypt or paid cert) once a domain is pointed at the public IP.
- Public IP not confirmed static — consider dynamic DNS.
- Backend has no health-check endpoint — consider adding `GET /health` for monitoring.

---

## 10. Quick deploy checklist

Use this every time a new build comes in:

- [ ] Confirm `Contact.jsx` uses `/send-email` (relative URL) — not `http://localhost:5000/...`
- [ ] `npm run build` produces a fresh `dist/`
- [ ] Replace files in `C:\xampp82\htdocs\sveltoz-website\sveltoz-website-UI\`
- [ ] If backend changed: replace `server.js`, run `npm install` if `package.json` changed
- [ ] If backend changed: `nssm restart SveltozAPI`
- [ ] Hard refresh browser (Ctrl+Shift+R) — verify site loads
- [ ] Submit Contact form — verify email arrives
