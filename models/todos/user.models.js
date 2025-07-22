import mongoose from 'mongoose';

const userSchema = new Schema({
  username : {
    typeof : String,
    required : true,
    unique : true,
    lowercase : true
  },
  
  email : {
    typeof : String,
    required : true,
    unique : true,
    lowercase : true
  },
  password : {
    typeof : Boolean,
    required : [true, "password is required"],
    unique : true,
  },

},

{timestamps : true}




);

export const User = mongoose.model('User', userSchema);
