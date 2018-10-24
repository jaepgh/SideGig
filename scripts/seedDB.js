const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Categories and Subcategories collections and inserts the values predefine below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sidegig");

const categorySeed = [
  {
    name: "Auto",
    description: "Includes but not limited to: Cleaning, Repairs/Maintenance, Towing etc.."
  },
  {
    name: "Electronics",
    description: "Includes but not limited to: Cell Phones, Computers, Video Games etc.."
  },
  {
    name: "Home & Garden",
    description: "Includes but not limited to: Appliances, Cleaning Services, Repairs/Maintenance, Yard Services etc.."
  },
  {
    name: "Personal",
    description: "Includes but not limited to: Clothing, Glasses, Watches etc.."
  },
  // {
  //   name: "Category 5",
  //   description: "This is the category 5"
  // },
  // {
  //   name: "Category 6",
  //   description: "This is the category 6"
  // }
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

