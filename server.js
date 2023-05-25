import express from "express";
const app = express();
const port = 3000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/ok", (_, res) => {
  res.status(200).send("ok");
});

app.get("/badgateway", (_, res) => {
  res.status(502).send("bad gateway");
});

app.listen(port, () => console.log("server started"));
