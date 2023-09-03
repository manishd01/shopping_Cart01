const express = require("express");

const prod_controller = require("../controller/product");
const prod_route = express.Router();

prod_route
  .get("/products/add", prod_controller.createprods)
  .post("/products/add", prod_controller.createprods)
  .get("/products", prod_controller.getprods)
  .post("/products", prod_controller.getprodsPOST)
  .get("/products/:id", prod_controller.getoneprod)
  .put("/products/:id", prod_controller.replaceprod)
  .patch("/products/:id", prod_controller.updateprod)
  .delete("/products/:id", prod_controller.deleteprod);

exports.prod_route = prod_route;
