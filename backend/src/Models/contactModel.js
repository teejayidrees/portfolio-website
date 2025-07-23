import mongoose from "mongoose";

//1- create a schema
//2- create a model based off that schema
const contactSchema = new mongoose.Schema(
  {
    Name: String,
    Email: String,
    Subject: String,
    Message: String,
    PhoneNumber: Number,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  } // createdAt, updatedAt{HIGHLY RECOMMENDED to use timestamps method to get time & date}
);
const Contact = mongoose.model("Contact", contactSchema); // meaning create a Note based on this schema
export default Contact;
