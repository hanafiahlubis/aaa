import express from "express";

const app = express();

app.use(express.json());
app.use(express.static("public"));

const bio = {
    nama : "ali hanafiah"
}
app.get("/api.get",(_req,res)=>{
    res.send(bio)
});


app.listen(3000);


