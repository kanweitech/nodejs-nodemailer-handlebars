require('dotenv').config();

const nodemailer = require('nodemailer');

// Step 1: Configure transporter with GMAIL cedentials
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD
    }
});

// Step 2: Configure email options like from, to, subject, message, attachments...
const mailOptions = {
    from: 'from@email.com',
    to: 'to@email.com',
    subject: 'Dynamic Email Template with Node.js',
    text: 'Simple email message (no HTML)'
};

// Step 3: Send email options using the transporter
transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
        console.log('Error: ', err);
    } else {
        console.log('Message sent successfully!');
    }
});