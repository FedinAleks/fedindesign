const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

// Парсер для обробки POST запитів
app.use(bodyParser.urlencoded({ extended: true }));

// Вказати ваші дані для відправки пошти
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'fedinaleksandr23@gmail.com',
        pass: 'bbc75e906ff41841'
    }
});

// Обробка POST запиту на /submit-form
app.post('/submit-form', (req, res) => {
    const { name, service, phone, comment } = req.body;

    // Параметри листа
    const mailOptions = {
        from: 'fedinaleksandr23@gmail.com',
        to: 'fedinaleksandr23@gmail.com',
        subject: 'New Form Submission',
        text: `
            Name: ${name}
            Service: ${service}
            Phone Number: ${phone}
            Comment: ${comment}
        `
    };

    // Відправлення листа
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Something went wrong.');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Form submitted successfully!');
        }
    });
});

// Запуск сервера на порті 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
