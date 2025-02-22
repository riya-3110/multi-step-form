const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

// middleware
app.use(express.json());
app.use(cors());

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.json({ message: "Form submitted successfully" });
});

app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});
