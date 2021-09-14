const express = require('express')

const router = express.Router()

const Alien = require('../modules/alien')

// router.get('/', async(req, res) => {
//     try{
//         const aliens = await Alien.find()
//         res.json(aliens)
//     }catch(err){
//         res.send('Error' + err)
//     }
// })

router.get('/:id', async(req, res) => {
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    }catch(err){
        res.send('Error' + err)
    }
})

router.post('/', async(req,res) =>{
    const alien = new Alien({
        name : req.body.name,
        tech : req.body.tech,
        disk : req.body.disk
    })

    try{
        const a1 = await alien.save()
        res.json(a1)
    }catch{
        res.send(err)
    }
})

router.patch('./:id', async(req, res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send(err)
    }
})

// kunal code

router.get('/', (req,res)=> {
    Alien.find()
    .then( docs => {
        const response = {
            count: docs.length,
            Alien : docs.map( doc =>{
                return {
                    productName : doc.productName,
                    productDescription : doc.productDescription,
                    productRate : doc.productRate,
                    productQuantity : "₹" + doc.productQuantity
                }
            })
        }
        res.status(200).json(response)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ 
            code : 500,
            error : err })
    })  
})

module.exports = router
