const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Product Name"],
        trim:true,
        maxLength:[100,"Product Name cannot exceed 100 characters"],
    },
    price:{
        type:Number,
        // required:[true,"Please Enter Product Price"],
        maxLength:[5,"Product Name cannot exceed 5 characters"],
        default:0.0,
    },
    description:{
        type:String,
        required:[true,"Please Enter Product Description"],

    },
    ratings:{
        type:Number,
        default:0,
    },
    images:[
        {
            image:{
                type:String,
                required:[true,"Please Enter Product Image"],
            }
        }
    ],
    category:{
        type:String,
        required:[true,"Please Enter Product Category"],
        enum:{
            values:["sunglass","watch","bag","shoes","jewellery","bike"],  
        }
    },
    stock:{
        type:Number,
        required:[true,"Please Enter Product Stock"],
        maxLength:[5,"Product Name cannot exceed 5 characters"],
        default:0,
    },
    numOfReviews:{
        type:Number,
        default:0,
    },
    reviews:[
        {
            name:{
                type:String,
                required:true,
            },
            ratings:{
                type:Number,
                required:true,
            },
            Comment:{
                type:String,
                required:true,
                
            },
            createdAt:{
                type:Date,
                default:Date.now(),
            },
        
            
    }
]

})

let schema = mongoose.model("Product",productSchema)

module.exports = schema;