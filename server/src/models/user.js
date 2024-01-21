const mongoose =require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  fullname: {
    type: String,
    lowercase: true,
    required: true,
    minlength: [3, 'fullname must be 3 letters long'],},
  email: {type:String, unique:true ,required:true},
  userName: String,
  bio: {
    type: String,
    maxlength: [200, 'Bio should not be more than 200'],
    default: "",
},
  role: {
    type: String,
    enum : ['user','admin'],
    default: 'user'
},
  password: String,
});
const User=mongoose.model('User',userSchema);
module.exports=User