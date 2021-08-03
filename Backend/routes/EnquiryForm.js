const express = require('express');
const enquiryData = require('../modals/enquiryForm.js');
let app = express.Router();

app.post('/', function (req, res) {
    var nowDate = new Date();
    var date1 = nowDate.getDate() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getFullYear();

    let item = {

        name: req.body.enquiry.name,
        email: req.body.enquiry.email,
        subject: req.body.enquiry.subject,
        message: req.body.enquiry.message,
        date: date1

    }
    let newenquiry = enquiryData(item);
    console.log("backend", item)
    newenquiry.save().then(function (data) {
        res.send(true)
    }).catch(function (error) {
        res.send(false)
    })

});

module.exports = app;