require("dotenv").config();

const path = require("path");
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Serve the built React UI (dist/) alongside the API — single-app deployment.
// dist/ is expected to sit next to the server/ folder on the deploy box.
const distPath = path.join(__dirname, "..", "dist");
app.use(express.static(distPath));

console.log("SMTP HOST:", process.env.SMTP_HOST);
console.log("SMTP PORT:", process.env.SMTP_PORT);
console.log("HR EMAIL:", process.env.HR_EMAIL);

const transporter = nodemailer.createTransport({

  host: process.env.SMTP_HOST,

  port: process.env.SMTP_PORT,

  secure: false,

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },

});

app.post("/send-email", async (req, res) => {

  console.log("BODY:", req.body);

  const {
    user_name,
    company,
    user_email,
    phone,
    message,
  } = req.body;

  try {

    const info = await transporter.sendMail({

      from: `"Sveltoz Website" <${process.env.SMTP_USER}>`,

      replyTo: user_email,

      to: process.env.HR_EMAIL,

      subject: `New Contact From ${user_name}`,

      html: `

        <div style="font-family: Arial; padding: 20px;">

          <h2 style="color:#22c55e;">
            New Website Inquiry
          </h2>

          <hr />

          <p>
            <b>Name:</b> ${user_name}
          </p>

          <p>
            <b>Company:</b> ${company}
          </p>

          <p>
            <b>Email:</b> ${user_email}
          </p>

          <p>
            <b>Phone:</b> ${phone}
          </p>

          <p>
            <b>Message:</b>
          </p>

          <div style="
            background:#f5f5f5;
            padding:15px;
            border-radius:10px;
          ">
            ${message}
          </div>

        </div>

      `,
    });

    console.log("MAIL SENT SUCCESS");
    console.log(info);

    res.status(200).json({
      success: true,
      message: "Email Sent Successfully",
      info,
    });

  } catch (error) {

    console.log("MAIL ERROR:");
    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }


});

// SPA fallback: any non-API GET returns index.html so client-side routing/refresh works.
app.get(/^\/(?!send-email).*/, (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// Use the port provided by the environment, or default to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
==================================
SERVER RUNNING ON PORT ${PORT}
==================================
  `);
});

