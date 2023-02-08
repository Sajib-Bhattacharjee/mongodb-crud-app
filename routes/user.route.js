const express = require("express");
const {
  getOneProduct,
  getAllProduct,
  createPorduct,
  deleteOneProduct,
  updateProduct,
} = require("../controllers/user.controller");
const router = express.Router();

//Created post request.
router.post("/", createPorduct);

//Get Multiple Product
router.get("/", getAllProduct);

// Get One product ...
router.get("/:id", getOneProduct);

//Detlete Single product.
router.delete("/:id", deleteOneProduct);

// Updated Product...

router.put("/:id", updateProduct);

module.exports = router;
