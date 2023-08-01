const router = require('express').Router();

router.get('/:id',(req,res)=> {
    
    let image =  req.params.id;
    res.sendFile(`D:/Desktop/Relinns Technologies/Node JS/API Assignment/assets/images/jpg/${image}`);
    res.status(200);
})   

module.exports = router