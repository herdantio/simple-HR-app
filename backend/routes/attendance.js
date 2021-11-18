let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({message: 'Server is running normally'})
})

module.exports = router