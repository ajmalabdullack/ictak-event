const express = require('express');
const partnerApplicationData = require('../modals/newpartnerForm');
let app = express.Router();

app.post('/', function (req, res) { 

    var nowDate = new Date();
    var date1 = nowDate.getDate() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getFullYear();

    
    let item = {
        name: req.body.partner.name,
        email: req.body.partner.email,
        phone: req.body.partner.phone,
        firm: req.body.partner.firm,
        address: req.body.partner.address,
        district: req.body.partner.district,
        officeSpace: req.body.partner.officeSpace,
        report: req.body.partner.report,
        expect: req.body.partner.expect,
        profile: req.body.partner.profile,
        employeeCount: req.body.partner.employeeCount,
        date: date1

    }
    let newPartner = partnerApplicationData(item);
    newPartner.save().then(function (data) {
        res.send(true)
    }).catch(function (error) {
        res.send(false)
    })

});

module.exports = app;