const express = require("express");
const _ = require("lodash");
const axios = require("axios");
const ws = require("ws");

const app = express();

app.get("/", async (_req, res) => {
  res.json({
    service: "patchpilot-demo-store",
    lodashVersion: _.VERSION,
    axiosLoaded: Boolean(axios),
    wsLoaded: Boolean(ws),
  });
});

app.listen(3001, () => {
  console.log("demo app running on :3001");
});
