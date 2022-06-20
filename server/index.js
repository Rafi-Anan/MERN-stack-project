const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json())

mongoose.connect("mongodb+srv://mern1:18961896@mern1.arp0y.mongodb.net/mern-blog", {
    useNewUrlParser: true, 
    useUnifiedTopology: true})
.then( () => {
    console.log(" mongoDb connected successfully")
})


app.get("/", (req, res)=> {
    res.send(" hello World")
})

const articles = require("./routes/articles")
app.use("/", articles)
app.use(express.static(__dirname + './'));




app.listen(5000, ()=> {
    console.log(" server is running on port 5000")
})
