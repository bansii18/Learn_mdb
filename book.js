const monggose = require("mongoose");
async function main(){
    await monggose.connect("mongodb://127.0.0.1:27017/myBooks");
}
main()
.then(()=>console.log("Connection Sucessfull"))
.catch((err)=>console.log(err));

const bookSchema = new monggose.Schema({
    title:{
        type : String,
        required:true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
    },
});
const Book = monggose.model("Book",bookSchema);
let book1 = new Book({
    // title:"Mathematics",
    author:"RD Sharma",
    price : 1200,
});
book1   
    .save()
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
