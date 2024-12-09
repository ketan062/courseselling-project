const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;




const UserSchema = new Schema({
    email : {type : String,unique:true},
    password : String,
    firstname:String,
    lastname:String
});
const adminSchema = new Schema({
    email : {type : String,unique:true},
    password : String,
    firstname:String,
    lastname:String
});
const CourseSchema = new Schema({
    title : String,
    description:String,
    price : Number,
    imageURL : String,
    createrID : ObjectId
});
const purchaseSchema = new Schema({
    userId : ObjectId,
    courseId : ObjectId,
    

});
const userModel = mongoose.model("user",UserSchema);
const adminModel = mongoose.model("admin",adminSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema);
const courseModel = mongoose.model("course",CourseSchema);

module.exports = {
    userModel,
    adminModel,
    purchaseModel,
    courseModel,
}