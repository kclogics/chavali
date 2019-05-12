const express = require("express");

const path = require("path");
const app = express();
const PORT = 8080;
app.use(express.static(path.join(__dirname, "../build")));

app.get("/users", function(req, res) {
  res.json([
    {
      id: 1,
      username: "krishna"
    },
    {
      id: 2,
      username: "nani"
    }
  ]);
});

app.get("/users2", function(req, res) {
  res.json("test");
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(process.env.PORT || PORT);
console.log("port running on" + " " + PORT);
