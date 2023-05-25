const express = require("express");

const app = express();
app.use(express.static("Public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger);
app.set("view engine", "ejs");

// creating route
// app.get("/", logger, logger, (req, res) => {
//   console.log("hello");
//   // res.download("server.js");
//   res.render("index", { text23: "world" });
// });

const userRouter = require("./routes/users");

app.use("/users", userRouter);
// middleware function
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);
