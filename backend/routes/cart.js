const express = require("express");
router = express.Router();
const User = require("../models/users.js");
const CartItem = require("../models/cartItem.js");

router.post("/cartitem", async (req, res) => {
  console.log(req.body);
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
        photo: req.body.photo,
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

router.delete("/removeCartItem/:cartItemId", async (req, res) => {
  try {
    // Delete the CartItem
    const deletedCartItem = await CartItem.findByIdAndDelete(
      req.params.cartItemId
    );

    if (!deletedCartItem) {
      return res.status(404).send("CartItem not found");
    }

    res.send({
      message: "CartItem removed successfully",
      data: deletedCartItem,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.put("/updateCartItem/:cartItemId", async (req, res) => {
  try {
     // Update the quantity of the CartItem
     const updatedCartItem = await CartItem.findByIdAndUpdate(
       req.params.cartItemId,
       { quantity: req.body.quantity },
       { new: true }
     );
 
     if (!updatedCartItem) {
       return res.status(404).send("CartItem not found");
     }
 
     res.send({ message: "CartItem updated successfully", data: updatedCartItem });
  } catch (e) {
     console.log(e)
     res.status(500).send(e);
  }
 });
module.exports = router;
