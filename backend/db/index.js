const mongoose = require("mongoose");

// connect'ing to mongodb.
mongoose.connect("mongodb+srv://kalyanppc:8m901HsB9dku8UVb@cluster0.4tv9pkp.mongodb.net/doubtApp");

const AdminSchema = new mongoose.Schema({
      username : String,
      email : String,
      password : String
})
const StudentSchema = new mongoose.Schema({
      username: String,
      email: String,
      password : String
})
const DoubtSchema = new mongoose.Schema({
      title: String,
      description: String,
      answer: String,
      isanswered : Boolean
})

const Admin = mongoose.model('Admin',AdminSchema);
const Student = mongoose.model('Student',StudentSchema);
const Doubt = mongoose.model('Doubt',DoubtSchema);

module.exports = {
      Admin,
      Student,
      Doubt
}
