const { moduleExpression } = require('@babel/types');
const express = require('express')
const router = express.Router();
const Search = require('../models/searchResults')


router.get('/', (req, res) => {
    const searches = Search.all;
    res.send(searches);
})

router.get('/:id', (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const searchResult = Search.findById(id);
        if(!searchResult){
            throw new Error("There is no result");
        }
        else{
            res.send(searchResult);
        }
    } catch (err){
        console.log(err);
        res.status(404).send({message: err.message});
    }
})

module.exports = router;
