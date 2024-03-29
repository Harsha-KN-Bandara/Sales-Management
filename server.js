const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8070; //if there is not available 8070 port use any port what there have

app.use(cors());

app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.set("strictQuery", true)
mongoose.connect(URL);

//  {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindandModify: true,
// }

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB Connetion success!");
});

const saleRouter = require("./routes/sales.js");


app.use("/sale", saleRouter);


app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
});
