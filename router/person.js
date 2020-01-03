const express = require('express');
const router = express.Router();
const personInfo = require('../Database/query/personInfo');

router.post('/',async(req,res) => {
    const personIsStu = await personInfo.getPersonInfo(req.body);
    res.json(personIsStu.recordsets[0]);
})

module.exports = router;