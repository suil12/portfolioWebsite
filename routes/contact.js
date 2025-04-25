// routes/contact.js
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.get('/', (req, res) => {
    res.render('contact', { 
        title: 'Contact me'
    });
});

// Configure the email transporter
const createTransporter = () => {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
};

// Handling form submission
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;
    
    // Validate form data on server side too
    if (!name || !email || !message) {
        return res.render('contact', {
            title: 'Contact me',
            error: 'All fields are required',
            formData: { name, email, message }
        });
    }

    try {
        // Create email content
        const mailOptions = {
            from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL, 
            replyTo: email,
            subject: `New message from ${name} via Portfolio`,
            text: `
Name: ${name}
Email: ${email}

Message:
${message}
            `,
            html: `
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<h3>Message:</h3>
<p>${message.replace(/\n/g, '<br>')}</p>
            `
        };

        // Send email
        const transporter = createTransporter();
        await transporter.sendMail(mailOptions);
        
        // Log the message (optional)
        console.log('Message received:');
        console.log({ name, email, message });
        
        // Return success response
        res.render('contact', {
            title: 'Contact me',
            success: 'Thanks for your message. I\'ll get in touch with you soon!'
        });
    } catch (error) {
        console.error('Error sending email:', error);
        res.render('contact', {
            title: 'Contact me',
            error: 'There was an error sending your message. Please try again later.',
            formData: { name, email, message }
        });
    }
});

module.exports = router;