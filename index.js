const mongoose = require("mongoose");

main()
.then(() => console.log("Connected"))
.catch((err)=>console.log("err"));
async function main(){
   await mongoose.connect('mongodb://127.0.0.1:27017/myDB');
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number
});

const User = mongoose.model("User",userSchema);

const user1 = new User({ name: "Vraj", age: 20 });
const user2 = new User({ name: "jay", age: 19 });
user1.save();
user2.save()
.then(()=>console.log("res"))
.catch((err) => console.log("err"));