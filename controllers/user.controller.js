const express = require("express");
const Product = require("../models/products");
const getOneProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const product = await Product.findOne({ _id: id });
    // const procut = await Procduct.findOne(1).limit(2).//limit({title: ....});
    if (product) {
      res.status(200).send({
        success: true,
        message: "Successfully Find the Product",
        data: product,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "Could Not Found the Product",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();

    if (products) {
      res.status(200).send({
        success: true,
        message: "Successfully Returned All Products",
        data: products,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "Could not found the products",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const createPorduct = async (req, res) => {
  try {
    const newProduct = new Product({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
    });

    const productData = await newProduct.save();

    //Insert multiple data on database.
    // const productData = await Product.insertMany([
    //   {
    //     title: "HP Probook-1",
    //     price: 12000,
    //     description: "Latest Model ever seen",
    //   },
    //   {
    //     title: "HP Probook-2",
    //     price: 13000,
    //     description: "Latest Model ever seen",
    //   },
    //   {
    //     title: "HP Probook-3",
    //     price: 13000,
    //     description: "Latest Model ever seen",
    //   },
    //   {
    //     title: "HP Probook-4",
    //     price: 14000,
    //     description: "Latest Model ever seen",
    //   },
    //   {
    //     title: "HP Probook-5",
    //     price: 15000,
    //     description: "Latest Model ever seen",
    //   },
    // ]);

    res.status(201).send(productData);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteOneProduct = async (req, res) => {
  try {
    const id = req.params.id;

    // const product = await Product.findByIdAndDelete({_id: id});
    const product = await Product.deleteOne({ _id: id });

    if (product) {
      res.status(200).send({
        success: true,
        message: "The Product is deleted Successfully",
        data: product,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "The Product doesn't exist on Database",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    //  const upadtedProduct = await Product.updateOne({});
    const upadtedProduct = await Product.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          title: req.body.title,
          price: req.body.price,
          description: req.body.description,
        },
      },
      { new: true }
    );

    if (upadtedProduct) {
      res.status(201).send({
        message: "This Product's information is updated successfully",
        success: true,
        data: upadtedProduct,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "Something Wrong, Doesn't upadted the product details",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
module.exports = {
  getOneProduct,
  getAllProduct,
  createPorduct,
  deleteOneProduct,
  updateProduct,
};
