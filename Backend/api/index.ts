const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = 8000;
const password = process.env.GMAIL_APP_PASSWORD;

// Middleware to parse form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.status(200).send("Home on Vercel"));

// Hire me route
app.post("/hire-me", async (req, res) => {
  const { name, phone, email, subject, message } = req.body;

  // Configure SMTP transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "jimmindungu3@gmail.com",
      pass: password,
    },
  });

  // Email options
  const mailOptions = {
    from: `Portfolio Contact Form <jimmindungu3@gmail.com>`,
    to: "jimmindungu3@gmail.com",
    subject: subject || "No Subject",
    text: `Message from ${name} - ${phone}:\n\n${message}\n\n\n\n${email}`,
    replyTo: email,
  };

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).send("All fields are required.");
  }

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send email.");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
