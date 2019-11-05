const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

//Connect db
connectDB();

//Init Middle wire

app.use(express.json({ extended: false }));

//////////////////app.get("/", (req, res) =>
// res.json({ msg: "welcome to contact keeper API... " })
/////////////////);

//Servre static assets in production

//Define our routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
