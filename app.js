const express = require("express");
const app = express();

const userRouter = require("./routes/user.route");
//mongoose.set("strictQuery", false);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//All routes.
app.use("/products", userRouter);
// Create Product Schema.

//Get Request From Home Route.
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
  res.status(200);
});

module.exports = app;
