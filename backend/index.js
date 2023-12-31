require("./config/db");
const express = require("express");
const questionRouter = require("./route/questionRoute")
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

app.use("/api/questions",questionRouter);