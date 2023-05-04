const express = require("express");
const logger = require("morgan"); // chinh la middleware chayj trc khi nhan res

const app = express();

// middleware
app.use(logger("dev"));

//routes
const users = require("./routes/user");
app.use("/", users);

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Server is OK  hell",
  });
});
//routes
// catch errors
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});
//Erorr handler
app.use(() => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status || 500;

  //res
  return res.status(status).json({
    error: {
      message: error.message,
    },
  });
});
// start server

const port = app.get("port") || 3000;
app.listen(port, () => console.log(`Server is listening on port xx ${port}`));
