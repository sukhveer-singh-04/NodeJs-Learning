const router = require('express').Router();


router.get('/:id', (req, res) => {
    const image = req.params.id;
    res.sendFile(`D:/Desktop/Relinns Technologies/Node JS/API Assignment/assets/images/png/${image}`);
    res.status(200);
})

module.exports = router;