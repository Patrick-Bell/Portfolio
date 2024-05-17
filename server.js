const dotenv = require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(filePath);
});

app.get('/projects', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'project.html');
    res.sendFile(filePath);
});

app.listen(3001, () => {
    console.log('App is listening on port 3001');
});
