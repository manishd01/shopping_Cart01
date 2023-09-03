const fs = require("fs");
const mongoose = require("mongoose");
const model = require("../Model/product");
const Product = model.Product;
//models:
exports.createprods = (req, res) => {
  // const product = new Product();
  // product.title = "phone12";
  // product.rating = "3";
  // product.price = 999;  // if geting from req.body
  const product = new Product(req.body);
  console.log("created1--");
  async function saving() {
    //like this or callback se
    try {
      const val1 = await product.save();
      res.status(201).json(req.body);
    } catch (err) {
      res.status(400).json(err);
    }
    //not working nihcli line:
    // const val1 = await product.save().catch((err) => res.status(400).json(err));
  }
  saving();
  // res.status(201).json(req.body);
  // product.save((err, doc) => {
  //   //error:MongooseError: Model.prototype.save() no longer accepts a callback
  //   console.log({ err, doc });
  // });

  // res.status(201).json(req.body);
};

exports.getprods = async (req, res) => {
  console.log("getEe");
  // const prods = await Product.find();
  const prods = await Product.find();

  res.json(prods);
};
exports.getprodsPOST = async (req, res) => {
  const prods = await Product.find();
  res.json(prods);
};
exports.getoneprod = async (req, res) => {
  console.log("id is", req.params.id);
  const id = req.params.id; //direct string
  const prod = await Product.findById(id);

  res.json(prod);
};
exports.replaceprod = async (req, res) => {
  console.log("id is", req.params.id);
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    ///bby deafault false hota hai
    //new: true: menas updated doc return kro json mai , agr likhoge nhi to puurana ayge:
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
  }
};
exports.updateprod = async (req, res) => {
  console.log("id is", req.params.id);
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
  }
};
exports.deleteprod = async (req, res) => {
  console.log("id is", req.params.id);
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndDelete({ _id: id });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
  }
};
//--------------------------------------------------------

// const data = JSON.parse(fs.readFileSync("products.json", "utf-8")); //old code: json file se data rha hai:
// const products = data.products;

// exports.getprods = (req, res) => {
//   console.log(req.body);
//   //agaya hai ab push rko
//   products.push(req.body);
//   res.json(req.body);
// };
// exports.getprodsPOST = (req, res) => {
//   res.json(products);
// };
// exports.getoneprod = (req, res) => {
//   console.log("id is", req.params.id);
//   const id = +req.params.id; //convert to int
//   const prod = products.find((p) => p.id == id);

//   res.json(prod);
// };
// exports.replaceprod = (req, res) => {
//   console.log("id is", req.params.id);
//   const id = +req.params.id; //convert to int
//   const prodindex = products.findIndex((p) => p.id === id);
//   products.splice(prodindex, 1, { ...req.body, id: id });

//   res.status(201).json();
// };
// exports.updateprod = (req, res) => {
//   console.log("id is", req.params.id);
//   const id = +req.params.id; //convert to int
//   const prodindex = products.findIndex((p) => p.id === id);
//   const product = products[prodindex];
//   products.splice(prodindex, 1, { ...product, ...req.body });
//   res.status(201).json();
// };
// exports.deleteprod = (req, res) => {
//   console.log("id is", req.params.id);
//   const id = +req.params.id; //convert to int
//   const prodindex = products.findIndex((p) => p.id === id);
//   const product = products[prodindex];
//   products.splice(prodindex, 1); // delete:
//   res.status(201).json(product);
// };
