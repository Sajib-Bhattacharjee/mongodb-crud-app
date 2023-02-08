const express = require("express");
const app = express();

const PORT = 3002;

const connectDB = require("./config/db");

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

//Server Connection.
app.listen(PORT, async () => {
  console.log(`This Server is succesfully ruing at http://localhost:${PORT}`);

  await connectDB();
});
