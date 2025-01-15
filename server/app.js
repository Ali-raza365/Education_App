const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const  morgan =require('morgan');


app.use(express.json());
app.use(morgan('dev'))



app.use(
  cors()
);

app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));


app.get("/", async (req, res) => {
  res.send("Server is working!");
});


// // import routes
// const user = require("./routes/authRoute");
// const vote = require("./routes/voteRoute");
// const position = require("./routes/positionRoute");
// const candidate = require("./routes/candiateRoute");

// app.use("/api/v2/user", user);
// app.use("/api/v2/vote", vote);
// app.use("/api/v2/candidate", candidate);
// app.use("/api/v2/position", position);



// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;
