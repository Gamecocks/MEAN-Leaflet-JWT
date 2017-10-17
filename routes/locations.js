const express = require('express');
const router = express.Router();

const config = require('../config/database');
const LocationLatest = require('../models/locationlatest')
const Location = require('../models/location')



router.post('/locations', (req, res, next) => {

    let receivedDate = Date.now();
    let genColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);

    let newLocation = new Location({
        mmsid: req.body.mmsid,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        name: req.body.name,
        callsign: req.body.callsign,
        speed: req.body.speed,
        course:req.body.course,
        heading: req.body.heading,
        received: receivedDate,
        color: genColor
    });
    
    let newLocationLatest = new LocationLatest({
        mmsid: req.body.mmsid,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        name: req.body.name,
        callsign: req.body.callsign,
        speed: req.body.speed,
        course:req.body.course,
        heading: req.body.heading,
        received: receivedDate,
        color: genColor,
    });
    
    Location.addLocation(newLocation, (err, location) => {
        if(err){
            res.json({success: false, msg: 'Failed to add locations'});
        }else{
            LocationLatest.addLocationLatest(newLocationLatest, (err, locationLatest) => {
                if(err){
                    res.json({success: false, msg: 'Failed to add locations'});
                }else{
                    res.json({success: true, msg: 'location added'}); 
                }
			});
        }
    });
});

router.get('/dashboard', function (req, res) {
    LocationLatest.find().sort({ mmsid : 'desc' }).exec(function (err, components) {
        if (err) res.send(err);
        res.json(components);
    });
});

module.exports = router;




