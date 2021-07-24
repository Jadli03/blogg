const Post = require("../models/post");

exports.createPost = async (req,res) => {
    try{
        const newPost = new Post(req.body);
         const post =  await newPost.save();
        res.status(200).json(post);
    }catch(err)
    {
        res.status(500).json({error:err})
    }
}

exports.updatePost = async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);

         if(post.username === req.body.username){
            try{
                const updatePost = await Post.findByIdAndUpdate(req.params.id,{
                    $set: req.body,
                },{new:true});
                res.status(200).json(updatePost);
            }catch(err) {
                res.status(500).json({error: "unauthorized"})
            }
         }else {
             return res.status(401).json({error : "unauthorized"});
         }
    }catch(err)
    {
        res.status(500).json({error:err})
    }
}

exports.deletePost = async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);

         if(post.username === req.body.username){
            try{
                await post.delete();
                res.json({message: "post deleted"})
            }catch(err) {
                res.status(500).json({error: "unauthorized"})
            }
         }else {
             return res.status(401).json({error : "unauthorized"});
         }
    }catch(err)
    {
        res.status(500).json({error:err})
    }
}

exports.getPost= async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err)
    {
        res.status(500).json({error:err})
    }
}

exports.getAllPost= async (req,res) => {
    const username = req.query.user;
    const categoryName = req.query.category;
    try{
        let posts;
        if(username){
            posts = await Post.find({username});
        }else if(categoryName){
            posts = await Post.find({category: {
                $in: [categoryName],
            },
        })
        }else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    }catch(err)
    {
        res.status(500).json({error:err})
    }
}