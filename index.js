require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Schema } = mongoose;
const morgan = require("morgan");
const routes = require("./routes/product");
const server = express();
const path = require("path");

server.use(cors());
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
// server.use(express.static(process.env.PUBLIC_DIR));
server.use(express.json());
server.use(morgan("default"));
server.use("/api", routes.prod_route);
server.use("*", (req, res) => {
  // res.sendFile(__dirname + "/build/index.html");
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

// console.log("env", process.env.DB_PASSWORD, "DBPWD");
// console.log(process.env.DB_PASSWORD, "DBPWD");

//DB:)
// mongoose.connect("mongodb://localhost:27017/ecomm");  noob version:
//better:
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  // await mongoose.connect("mongodb://127.0.0.1:27017/ecomm");
  console.log("connected with DBs");
}

server.listen(process.env.PORT, () => {
  console.log("started");
});

///
// server.post("/products", prod_controller.getprods);
// server.get("/products", prod_controller.getprodsPOST);
// server.get("/products/:id", prod_controller.getoneprod);
// server.put("/products/:id", prod_controller.replaceprod);
// server.patch("/products/:id", prod_controller.updateprod);
// server.delete("/products/:id", prod_controller.deleteprod);

////// const auth = (req, res, next) => {
//   // console.log(req.ip, req.hostname, new Date(), req.method);
//   // next(); //pass krdo fir uske baad agle middle ware p gya api endpoint p

//   if (req.query.pass == "123") {
//     console.log("authorise ho ap");
//     next();
//   } else {
//     res.sendStatus(401);
//   }
// };
// server.use(auth);
// server.get("/", (req, res) => {
//   res.send("hellp express");
//   //   res.sendStatus(202).send("hello new status");
//   //   res.json(products);
//   // res.json(products);
// });
