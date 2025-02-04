const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// Server used to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.listen(3000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "rayudusaikiran22@gmail.com", // Ensure you use an environment variable here
        pass: "yourpassword",  // Use an app-specific password or environment variable
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to send");
    }
});

router.post("/contact", (req, res) => {
    const { firstName, lastName, email, message, phone } = req.body;

    const name = `${firstName} ${lastName}`;
    const mail = {
        from: name,
        to: "rayudusaikiran22@gmail.com",
        subject: "Contact Form Submission - Portfolio",
        html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>
        `,
    };

    contactEmail.sendMail(mail, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            return res.status(500).json({ code: 500, status: "Error sending email" });
        } else {
            console.log("Email sent:", info.response);
            return res.json({ code: 200, status: "Message Sent" });
        }
    });
});

app.use(router);

export default function Server() {
    // This is not needed unless you have additional logic to export
}
