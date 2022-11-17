const express = require("express"); // install express
const bodyParser = require("body-parser");
const searchRoutes = require("./routes/searchResults")
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.post("/", (req, res) => {
    res.status(405).send("Method not allowed")
})

app.listen(port, () => {
    console.log(`I am listening at http://localhost:${port}`)
});

app.use(bodyParser.json());
app.use("/searches", searchRoutes)


// export app
module.exports = app
