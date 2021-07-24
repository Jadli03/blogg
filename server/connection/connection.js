const mongoose = require("mongoose");

const DATABASE = process.env.MONGO_URI;
mongoose.connect(DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false

})
.then(()=> console.log("database connected"))
.catch((err)=>console.log(err.message));

