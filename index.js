const express = require('express');
const app = express();
const port = 3000;

// Use built-in middleware to parse URL-encoded data (form submissions)
app.use(express.urlencoded({ extended: true }));

// Route to serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle POST request
app.post('/', (req, res) => {
    const name = (req.body.name);
    const mobileno = (req.body.mobileno);
    const emailid = (req.body.emailid);
    const dob = (req.body.dob);
    const gender = (req.body.gender);
    const uname = (req.body.uname);

    res.send(`The entered details are:-<br> Name:- ${name}<br>Mobile No:- ${mobileno}<br>Email Id:- ${emailid}<br>Date of Birth:- ${dob}<br>Gender:- ${gender}<br>Username:- ${uname}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
