const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 8000;

app.use(
  cors({
    origin: [
      "http://localhost:5174", 
      "https://codeshark-portfolio.vercel.app", 
    ],
    methods: ["GET", "POST",],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"], 
  })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.status(200).send("Home"));

// Hire me route
app.post("/hire-me", async (req, res) => {
  const { name, email, message } = req.body;

  // Configure SMTP transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "jimmindungu3@gmail.com",
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // Email options
  const mailOptions = {
    from: `Portfolio Contact Form <jimmindungu3@gmail.com>`,
    to: "jimmindungu3@gmail.com",
    text: `Message from ${name}\n\n${message}\n\n${email}`,
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

