var express = require("express");
var router = express.Router();

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get("/", function(req, res, next) {
  res.render("authentication");
});

// eslint-disable-next-line no-unused-vars
router.get("/dashboard", function(req, res, next) {
  let data = {
    orders: [
      {
        email: "User Email",
        car: "Car",
        startRent: "Start Rent",
        finishRent: "Finish Rent",
        price: "Price",
        status: "Status"
      },
      {
        email: "User Email",
        car: "Car",
        startRent: "Start Rent",
        finishRent: "Finish Rent",
        price: "Price",
        status: "Status"
      },
      {
        email: "User Email",
        car: "Car",
        startRent: "Start Rent",
        finishRent: "Finish Rent",
        price: "Price",
        status: "Status"
      },
      {
        email: "User Email",
        car: "Car",
        startRent: "Start Rent",
        finishRent: "Finish Rent",
        price: "Price",
        status: "Status"
      },
      {
        email: "User Email",
        car: "Car",
        startRent: "Start Rent",
        finishRent: "Finish Rent",
        price: "Price",
        status: "Status"
      },
      {
        email: "User Email",
        car: "Car",
        startRent: "Start Rent",
        finishRent: "Finish Rent",
        price: "Price",
        status: "Status"
      },
      {
        email: "User Email",
        car: "Car",
        startRent: "Start Rent",
        finishRent: "Finish Rent",
        price: "Price",
        status: "Status"
      },
      {
        email: "User Email",
        car: "Car",
        startRent: "Start Rent",
        finishRent: "Finish Rent",
        price: "Price",
        status: "Status"
      },
      {
        email: "User Email",
        car: "Car",
        startRent: "Start Rent",
        finishRent: "Finish Rent",
        price: "Price",
        status: "Status"
      },
      {
        email: "User Email",
        car: "Car",
        startRent: "Start Rent",
        finishRent: "Finish Rent",
        price: "Price",
        status: "Status"
      }
    ],
    cars: [
      {
        nama: "Name",
        category: "Category", 
        price: "Price",
        startRent: "-",
        finishRent: "-",
        createdAt: "Created at",
        updatedAt: "Updated at"
      },
      {
        nama: "Name",
        category: "Category", 
        price: "Price",
        startRent: "Start Rent",
        finishRent: "Finish Rent",
        createdAt: "Created at",
        updatedAt: "Updated at"
      },
      {
        nama: "Name",
        category: "Category", 
        price: "Price",
        startRent: "Start Rent",
        finishRent: "Finish Rent",
        createdAt: "Created at",
        updatedAt: "Updated at"
      },
      {
        nama: "Name",
        category: "Category", 
        price: "Price",
        startRent: "Start Rent",
        finishRent: "Finish Rent",
        createdAt: "Created at",
        updatedAt: "Updated at"
      },
      {
        nama: "Name",
        category: "Category", 
        price: "Price",
        startRent: "-",
        finishRent: "-",
        createdAt: "Created at",
        updatedAt: "Updated at"
      },
      {
        nama: "Name",
        category: "Category", 
        price: "Price",
        startRent: "Start Rent",
        finishRent: "Finish Rent",
        createdAt: "Created at",
        updatedAt: "Updated at"
      },
      {
        nama: "Name",
        category: "Category", 
        price: "Price",
        startRent: "Start Rent",
        finishRent: "Finish Rent",
        createdAt: "Created at",
        updatedAt: "Updated at"
      },
      {
        nama: "Name",
        category: "Category", 
        price: "Price",
        startRent: "Start Rent",
        finishRent: "Finish Rent",
        createdAt: "Created at",
        updatedAt: "Updated at"
      },
      {
        nama: "Name",
        category: "Category", 
        price: "Price",
        startRent: "Start Rent",
        finishRent: "Finish Rent",
        createdAt: "Created at",
        updatedAt: "Updated at"
      },
      {
        nama: "Name",
        category: "Category", 
        price: "Price",
        startRent: "Start Rent",
        finishRent: "Finish Rent",
        createdAt: "Created at",
        updatedAt: "Updated at"
      }
    ]
  };
  res.render("dashboard", data);
});

// eslint-disable-next-line no-unused-vars
router.get("/list-car", function(req, res, next) {
  res.render("list-car");
});

// eslint-disable-next-line no-unused-vars
router.get("/add-new-car", function(req, res, next) {
  res.render("add-new-car");
});

module.exports = router;
