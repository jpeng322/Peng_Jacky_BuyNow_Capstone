const express = require("express");
router = express.Router();
const User = require("../models/users.js");
const CartItem = require("../models/cartItem.js");
const mongoose = require("mongoose");
router.post("/cartitem", async (req, res) => {
  // console.log(req.body.price.replace("$", "").parseInt())
  //   console.log(req.body);
  try {
    const user = await User.findById(req.body.userId).populate("items");
    if (!user) {
      return res.status(404).send("User not found");
    }

    const hasCartItem = user.items.find((item) => {
      return item.itemId === req.body.itemId;
    });

    if (hasCartItem) {
      //   const updateInfo = await User.updateOne(
      //     { itemId: req.body.userId },
      //     { $set: { "items.quantity": items.quantity + 1 } }
      //   );

      //   const updateInfo = await User.updateOne(
      //     { _id: req.body.userId, itemId: req.body.itemId },
      //     { $set: { "items.$.quantity": hasCartItem.quantity + 1 } }
      //   );
      //   const itemId = new mongoose.Types.ObjectId(req.body.itemId);

      //   const updateInfo = await User.findOneAndUpdate(
      //     { _id: req.body.userId, "items.itemId": itemId },
      //     { $set: { "items.quantity": (hasCartItem.quantity + 1).toString() } },
      //     { new: true }
      //   );

      const userId = req.body.userId;
      // const itemId = req.body.itemId;
      // console.log(userId, itemId)
      console.log(hasCartItem._id.toString());
      //   console.log(hasCartItem._id, user._id);
      // const itemId = new mongoose.Types.ObjectId(req.body.itemId);
      //   const itemId = new mongoose.Types.ObjectId(Number(req.body.itemId));

      const cartItem = await CartItem.findByIdAndUpdate(
        "65b191e098974c1bc72c21b5",
        { quantity: hasCartItem.quantity + 1 },
        { new: true }
      );

      console.log(cartItem);
      //   CartItem.updateOne(
      //     { _id: user._id, "items._id": hasCartItem._id },
      //     { $inc: { "items.$.quantity": 1 } }
      //   )
      //     .then(() => {
      //       console.log("Item quantity updated");
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      //   console.log("HASCARTITEM", updateInfo);
      // await updateInfo.save();

      res.send({ message: "Quantity updated successfully" });
    } else {
      console.log("CREATED ITEM");
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
