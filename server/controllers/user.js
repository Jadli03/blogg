const User = require("../models/user");
const Post = require("../models/post");
const bcrypt = require('bcryptjs');

exports.updateUser = async (req,res) => {
    if(req.body.userId == req.params.id)
    {
        if(req.body.password){
            const salt =  await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password,salt);
        }
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id,{
                $set: req.body
            },{new:true})

            res.json(updateUser)
        }   catch(err){
            console.log(err)
        }
    }
    else{
        res.status(401).json({error: "unauthorized"})
    }
}

exports.deleteUser = async (req,res) => {
    if(req.body.userId == req.params.id)
    {
        try{
            const user = await User.findById(req.params.id);
            await Post.deleteMany({username:user.username})
        }catch(err){
            res.status(404).json({error: "user not found"});
        }

        try {

           await User.findByIdAndDelete(req.params.id)
           res.json({message: "account deleted"})
        }   catch(err){
            console.log(err)
        }
    }
    else{
        res.status(401).json({error: "unauthorized"})
    }
}

exports.getUser = async (req,res) => {
    try{
        const user = await User.findById(req.params.id);
        const {password, ... others} = user._doc;
        res.json(others);
    }catch(err){
        res.status(500).json({error : err})
    }
}