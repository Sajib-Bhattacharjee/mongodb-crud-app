const app = require("./app");

const PORT = 3002;

const connectDB = require("./config/db");

//Server Connection.
app.listen(PORT, async () => {
  console.log(`This Server is succesfully ruing at http://localhost:${PORT}`);

  await connectDB();
});
