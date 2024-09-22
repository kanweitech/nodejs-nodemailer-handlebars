require('dotenv').config();

const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const port = process.env.PORT || 5001

// Step 1: Configure transporter with GMAIL cedentials
const transporter = nodemailer.createTransport({
    service: 'magavotes.store',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

// Configure handlebars plugin
const hbsOptions = {
    viewEngine: {
        partialsDir: 'views',
        layoutsDir: 'views',
        defaultLayout: baseMessage
    },
    viewPath: 'views'
};
transporter.use('compile', hbs(hbsOptions))

function sendMail(to, subject, template, context) {
    // Step 2: Configure email options like from, to, subject, message, attachments...
    const mailOptions = {
        from: 'admin@magavotes.store',
        to,
        subject,
        template,
        context
    };

    // Step 3: Send email options using the transporter
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log('Error: ', err);
        } else {
            console.log('Message sent successfully!');
        }
    });
};

app.listen(port, () => {
    console.log(`Server is running at localhost: ${port}`);
});