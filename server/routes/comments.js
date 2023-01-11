
const express = require('express')
const {validate,Comment} = require('../Models/comments')
const router = express.Router()
const auth = require("../middlewares/auth");

//GET ALL COMMENTS 
router.get('/' ,async (req,res)=>{
    const comments = await Comment.find().sort('name').select('name body -_id');
    res.send(comments);
});

//ADD NEW COMMENTS 
router.post('/',auth, async (req,res)=>{

    const results = validate(req.body)
    if(results.error){
        // bad REQUEST 400
        res.status(400).send(results.error.details[0].message)
        return
    }

    let comment = new Comment({
        name: req.body.name,
        body: req.body.body
    });
    comment = await comment.save()
    res.send(comment)
});

module.exports = router ;