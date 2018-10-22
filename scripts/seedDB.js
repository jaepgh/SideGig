const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Categories and Subcategories collections and inserts the values predefine below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sidegig");

const categorySeed = [
  {
    name: "Category 1",
    description: "This is the category 1"
  },
  {
    name: "Category 2",
    description: "This is the category 2"
  },
  {
    name: "Category 3",
    description: "This is the category 3"
  },
  {
    name: "Category 4",
    description: "This is the category 4"
  },
  {
    name: "Category 5",
    description: "This is the category 5"
  },
  {
    name: "Category 6",
    description: "This is the category 6"
  }
];

db.PostCategory.deleteMany({})
  .then(() => db.PostCategory.collection.insertMany(categorySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
