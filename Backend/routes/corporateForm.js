const express = require('express');
const corporateApplicationData = require('../modals/newcorporateForm');
let app = express.Router();

app.post('/', function (req, res) {

    var nowDate = new Date();
    var date1 = nowDate.getDate() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getFullYear();


    let item = {

        name: req.body.corporate.name,
        address: req.body.corporate.address,
        website: req.body.corporate.website,
        head: req.body.corporate.head,
        nature: req.body.corporate.nature,
        typeof: req.body.corporate.typeof,
        identityNo: req.body.corporate.identityNo,
        GST: req.body.corporate.GST,
        date: req.body.corporate.date,
        nameofContact: req.body.corporate.nameofContact,
        phone: req.body.corporate.phone,
        email: req.body.corporate.email,
        TechnicalSkill: req.body.corporate.TechnicalSkill,
        employeeCount: req.body.corporate.employeeCount,
        hire: req.body.corporate.hire,
        patents: req.body.corporate.patents,
        collaborate: req.body.corporate.collaborate,
        details: req.body.corporate.details,
        date: date1


    }
    let newcorporate = corporateApplicationData(item);
    console.log("backend", item)
    newcorporate.save().then(function (data) {
        res.send(true)
    }).catch(function (error) {
        res.send(false)
    })

});

module.exports = app;