const express = require("express");
const app = new express();

app.set("view engine","ejs");
app.set("Views","./views");
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("home");
});

app.get("/goodnighttoyou",(req,res)=>{
    res.render("goodnight",{name:"Hien"});
})

app.listen(8080,()=>{
    console.log("connect to server");
});