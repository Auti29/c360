import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("server response!!!");
});

app.listen(port, () => {
  console.log(`listening... to port: http://localhost:${port}`);
});
