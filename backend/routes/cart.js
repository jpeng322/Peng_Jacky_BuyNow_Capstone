const express = require("express");
router = express.Router();
const User = require("../models/users.js");
const CartItem = require("../models/cartItem.js");

router.post("/cartitem", async (req, res) => {
  try {
    const user = await User.findById(req.body.userId).populate("items");
    if (!user) {
      return res.status(404).send("User not found");
    }

    const hasCartItem = user.items.find((item) => {
      return item.itemId === req.body.itemId;
    });

    if (hasCartItem) {

     await CartItem.findByIdAndUpdate(
        hasCartItem._id.toString(),
        { quantity: hasCartItem.quantity + 1 },
        { new: true }
      );

      res.send({ message: "Quantity updated successfully" });
    } else {
      const cartItem = new CartItem({
        productTitle: req.body.productTitle,
        price: parseInt(req.body.price.replace("$", "")),
        quantity: 1,
        itemId: req.body.itemId,
      });

      const savedCartItem = await cartItem.save();

      const user = await User.findByIdAndUpdate(
        req.body.userId,
        { $push: { items: savedCartItem._id } },
        { new: true }
      );

      if (!user) {
        return res.status(404).send("Cart item not found");
      }

      res.send(savedCartItem);
    }
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.get("/cartitems/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate("items");

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.send(user.items);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/cartitem/:itemId", async (req, res) => {
  console.log(req.params.itemId);
  try {
    const cartItem = await CartItem.findById(req.params.itemId);

    if (!cartItem) {
      return res.status(404).send("User not found");
    }

    res.send(cartItem);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
