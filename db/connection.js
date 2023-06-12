const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://vansprates:TJP3LeaJuc8KjbEc@cluster0.l3g0zd4.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("Conectado ao banco!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = main;
