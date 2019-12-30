const express = require('express');
const router = express.Router();
const vehicleTransactions = require('../Database/query/vehicle');


router.get('/city', async (req,res) => {
    const cities = await vehicleTransactions.getCities();
    if(cities.recordset[0].Status != 0) {
        res.json(cities.recordsets[0]);
    } else {
        res.json({ status:404, message:"Not Found City"});
    }
})

router.post('/vehicles', async(req,res) => {
    const vehicle = await vehicleTransactions.vehicle(req.body);
    res.json(vehicle.recordsets[0]);
})

router.post('/travel', async(req,res) => {
    const travel = await vehicleTransactions.travel(req.body);
    if(travel.recordset[0].Status != 0 ) {
        res.json(travel.recordsets[0]);
    } else {
        res.json({ status:500, message:"Travel operation Failed !!" });
    }
})

router.post('/pastJourneys', async(req,res) => {
    const pastJourneys = await vehicleTransactions.getPastJourneys(req.body);
    if (pastJourneys.recordset[0].Status != 0) {
        res.json(pastJourneys.recordsets[0]);
    } else {
        res.json({ status:404, message:"Past Journeys not found"});
    }
})

module.exports = router;