require("dotenv").config();
let mongoose = require("mongoose");
let URI = process.env.DB_CONNECTION_STRING;
let connectdb = async () => {
  try {
    let con = await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database is connected with the given URI ");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectdb;
