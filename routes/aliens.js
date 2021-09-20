const express = require('express')

const router = express.Router()

const Alien = require('../modules/alien')

router.get('/', async(req, res) => {
    try{
        const aliens = await Alien.find()
        res.json(aliens)
    }catch(err){
        res.send('Error' + err)
    }
})


router.get('/:id', async(req, res) => {
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    }catch(err){
        res.send('Error' + err)
    }
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
})

// Get Product By Id
router.get('/:id', (req, res) =>{
    const item = req.params.id
    for(let alien of alien){
        if(alien.item === item){
            res.json(item)
            console.log("Prodcut Got By Id")
        }
    }

    res.status(404).send('Product not found');
})
router.post('/', async(req,res) =>{
    const alien = new Alien({
        productName : req.body.productName,
        productDescription : req.body.productDescription,
        productRate : req.body.productRate,
        productQuantity : req.body.productQuantity
    })

    try{
        const a1 = await alien.save()
        res.json(a1)
    }catch{
        res.send(err)
    }
})

router.put('/:id', async(req, res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)
        console.log("data Updated",a1)
    }catch(err){
        res.send(err)
        console.log("data not Updated")
    }
})

// router.put('/:id', (req, res) => {
//     const alien = Alien.find(c=> c.id === parseInt(req.params.id));
//     if (!alien) res.status(404);
     
//     const { error } = validateBook(req.body);
//     if (error){
//     res.status(400).send(error.details[0].message);
//     return;
//     }
// })
// router.delete('/:id', function (req, res) {

//     var id = req.params.id;
//         Alien.remove(req.params.id)
//     //DELETE YOUR RECORD WITH YOUR PARAM.
//     res.json(id)
//     console.log("DEleted")
//     return res.status(200);
// })

router.delete('/:id', function(req, res, next) {
    try{
    Alien.remove({_id: req.params.id},function(err,alien) {
      res.json(alien);
      console.log("Data Succefully Deleted")
    }) }catch(error){
        res.send(err)
    }
  });

module.exports = router
