const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: String,
  initContract: Date,
  finishContract: Date,
  position: String,
});

const peopleSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  jobs: [jobSchema],
  nationality: String,
  year: Number,
});

const People = mongoose.model("People", peopleSchema, "people");
module.exports = People;
