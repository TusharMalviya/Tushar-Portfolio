
// To run this server file use command
// node server.js



const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config(); // Load environment variables

// Server setup
const app = express();
// app.use(cors());
app.use(cors({
  origin: 'https://tusharmalviya-portfolio.vercel.app',// Allow requests from React (localhost:3000)
}));

app.use(express.json());
app.use("/", router);

// Server listening on port 5000
app.listen(5000, () => console.log("Server Running"));

// Verify environment variables
console.log(process.env.EMAIL_ID);
console.log(process.env.PASSWORD);

// Setup nodemailer with Gmail
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.PASSWORD,
  },
});

// Verify Nodemailer connection
contactEmail.verify((error) => {
  if (error) {
    console.log("Nodemailer Error:", error);
  } else {
    console.log("Nodemailer Ready to Send");
  }
});

// Route to handle contact form submissions
router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const name = firstName + " " + lastName;
  const mail = {
    from: name,
    to: process.env.EMAIL_ID, // Replace with your email
    subject: "Contact Form Submission - Portfolio",
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  // Send email
  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ code: 500, message: "Error sending message" });
    } else {
      return res.status(200).json({ code: 200, message: "Message Sent Successfully" });
    }
  });
});
