const Category = require("../models/category");

exports.createCategory = async (req,res) => {
    try{
        const newCategory = new Category(req.body);
        const result = await newCategory.save();
        res.json(result);
    }catch(err){
        res.status(500).json({error:err})
    }
}

exports.getCategory = async (req,res) => {
    try{
        const result = await Category.find();
        res.json(result);
    }catch(err){
        res.status(500).json({error:err})
    }
}