const express = require("express");
router = express.Router();
const User = require("../models/users.js")
const CartItem = require("../models/cartItem.js")

router.post('/cartitem', async (req, res) => {
    console.log(req.body)
    try {
       const cartItem = new CartItem({
         productTitle: req.body.productTitle,
         price: req.body.price,
         quantity: req.body.quantity
       });
   
       const savedCartItem = await cartItem.save();
   
       const user = await User.findByIdAndUpdate(req.body.userId, { $push: { items: savedCartItem._id } }, { new: true });
   
       if (!user) {
         return res.status(404).send('User not found');
       }
   
       res.send(savedCartItem);
    } catch (error) {
       res.status(500).send(error);
    }
});

router.get('/cartitems/:userId', async (req, res) => {
    try {
       const user = await User.findById(req.params.userId).populate('items');
   
       if (!user) {
         return res.status(404).send('User not found');
       }
   
       res.send(user.items);
    } catch (error) {
       res.status(500).send(error);
    }
   });
   
module.exports = router;