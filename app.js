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


const generateSpread = (req, res, next) => {
    console.log(req.params);
    let range = [];
    for(let i = Number(req.query.floor); i < Number(req.query.ceil); i++){
        range.push(i);
    }
    res.status = "Success";
    res.randomPick= range[Math.floor(Math.random() * range.length)];
    next();
}

app.get("/random", generateSpread, (req, res) => {
    res.json({
        status: res.status,
        range: [Number(req.query.floor), Number(req.query.ceil)],
        randPick: res.randomPick,
    });
})







app.listen(port, () => console.log("Listening on port: ", port));