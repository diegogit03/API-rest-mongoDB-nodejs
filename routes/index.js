var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
    res.status(201);
    res.json({ 'name': 'William Bruno', 'email': 'wbrunom@gmail.com' });
});

router.use('/stormtroopers', require('./stormtroopers'));

module.exports = router;