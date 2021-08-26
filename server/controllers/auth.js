const User = require("../models/user");
const bcrypt = require("bcryptjs");

const register = async (req,res) =>{
    try{
        const {username,email,password,pic} = req.body;

        if(!username || !email || !password)
          return res.status(422).json({error: "fill all the details"})

          const userEmail = await User.findOne({email});
          if(userEmail)
              return res.status(404).json({error:"account exist with email already"})

        const salt = await bcrypt.genSalt(10)
        const hashedpass = await bcrypt.hash(password,salt);
        const newUser = new User({
            username,
            email,
            password:hashedpass,
            pic});

        const user = await newUser.save();
            res.json(user);
    }catch(err){
        res.status(500).json({error:err});
    }
}

const login = async (req, res) => {
    
  try {
      if(!req.body.email || !req.body.password)
          return res.status(422).json({error: "fill all the details"})

      const user = await User.findOne({ email: req.body.email});
      if(!user)
      return res.status(400).json({error:"Wrong credentials!"});

      const validated = await bcrypt.compare(req.body.password, user.password);
      if(!validated)
        return res.status(400).json({error : "Wrong credentials!"});

      const { password, ...userData } = user._doc;
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  };


module.exports = {register,login}