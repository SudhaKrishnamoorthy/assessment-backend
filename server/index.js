const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getInspiration, getFruit, getWorkout, } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/inspiration", getInspiration);
app.get("/api/fruit", getFruit);
app.get("/api/workout", getWorkout);



app.listen(4001, () => console.log("Server running on 4001"));
