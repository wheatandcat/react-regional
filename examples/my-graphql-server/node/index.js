var express = require("express");
var cors = require("cors");
var app = express();

app.set("port", 5000);

app.use(cors());
app.use(express.static(__dirname + "/public"));

app.post("/login", function(req, res) {
  res.json({
    token: "7J6gSuyj7J6gSuyj7J6gSuyj7J6gSuyj7J6gSuyj"
  });
});

app.listen(app.get("port"), function() {
  console.log("Node app is running at localhost:" + app.get("port"));
});
