const express = require('express');
const cors = require('cors');
const port = 3002;
const app = express();
app.use(cors());

let animalsArr = ["lion", "zebra", "tiger", "elephant", "shark", "giraffe", "dog"];

const isAnimal = (req, res, next) => {
    console.log(req.params);
    if(animalsArr.includes(req.params.name)){
        res.json({
            status: "Success",
            message: true,
        })
    } else {
        res.json({
            status: "Failed",
            message: false,
        })
    }
}


app.get("/animal", (req, res, next) => {
    res.json({animalsArr});
})


app.get("/animal/:name", isAnimal, (req, res) => {
    res.json(animalsArr);
})

app.get("/random", (req, res, next) => {
    res.json({
        
    });
})



app.listen(port, () => console.log("Listening on port: ", port));