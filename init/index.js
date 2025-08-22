const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/Rentify";

main()
    .then((res) => console.log("connected to db"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

async function initDB(){
    await Listing.deleteMany().then((res) => console.log(res)).catch((err) => console.log(err));
    initData.data = initData.data.map((obj) => ({...obj}))
    await Listing.insertMany(initData.data)
        .then((res) => console.log("data was saved"))
        .catch((err) => console.log(err));
}

initDB();


//     initData.data = initData.data.map((obj) => ({...obj, owner: "6889f1bc02a913c065ed97d1"}))

  