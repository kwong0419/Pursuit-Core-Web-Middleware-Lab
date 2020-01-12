const express = require('express');
const cors = require('cors');
const port = 3002;
const app = express();
app.use(cors());

// Problem 1
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

// Problem 2
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


// Problem 3
let queue = ["Cassidy", "Kevin", "Corey", "Jon", "Jhenya", "Caroline"]

const handleQueue = (req, res, next) => {
    if(req.params.queueType === "peek"){
        res.json({
            status: "Success",
            data: queue[queue.length-1],
        })
    } else if(req.params.queueType === "enqueue"){
        res.json({
            status: "Success",
            enqueue: req.query.name
        })
        queue.unshift(req.query.name);
        console.log(queue);
    } else if(req.params.queueType === "dequeue"){
        res.json({
            status: "Success",
            dequeue: queue[queue.length-1],
        })
        queue.pop();
        console.log(queue);
    } 
    next();
}

app.get("/queue/:queueType", handleQueue, (req,res) => {
    // res.json({queue});
})




app.listen(port, () => console.log("Listening on port: ", port));