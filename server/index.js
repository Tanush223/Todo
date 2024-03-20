const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const db = require("./Models/db");

//importing route
const allRoute = require("./routes/index.route");

app.use(cors());
app.use(express.json());
app.use("/", allRoute);

app.listen(port, () => {
  db.once("open", () => {
    console.log(`server is ruiing onn port ${port} and db is up`);
  }).on("error", (err) => {
    console.log(err);
  });
});
