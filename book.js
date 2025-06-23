const mongoose = require("mongoose");
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/myBooks");
}
main()
.then(()=>console.log("Connection Sucessfull"))
.catch((err)=>console.log(err));

const bookSchema = new mongoose.Schema({
    title:{
        type : String,
        maxLength : 10,
        required:true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:1,
    },
    discount:{
        type:Number,
        default : 120,
    },
    category: {
        type: String,
        enum: ["comics", "manga"],
    },
    genere : [String],
});
const Book = mongoose.model("Book",bookSchema);
let book1 = new Book({
    title:"Science",
    author:"RD Sharma",
    price : 10,
    category: "comics",
   genere: ["scifi" , "fantasy"],
});
book1   
    .save()
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
