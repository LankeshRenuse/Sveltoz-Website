// PM2 process config — recommended way to run the single Express app
// (serves the React UI + /send-email API) on the static-IP server.
//
//   npm i -g pm2
//   pm2 start ecosystem.config.cjs
//   pm2 save
//   pm2 startup        # auto-start on server reboot
//
// Must be .cjs because the root package.json sets "type": "module".
module.exports = {
  apps: [
    {
      name: "sveltoz-web",
      script: "server/server.js",
      cwd: __dirname,
      env: {
        NODE_ENV: "production",
        PORT: 8990,
      },
      instances: 1,
      autorestart: true,
      max_memory_restart: "300M",
    },
  ],
};
