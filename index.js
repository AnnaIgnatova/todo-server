const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require('./config/db');

const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM plan_list";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const task = req.body.taskName;
  const status = req.body.statusName;

  const sqlInsert = "INSERT INTO plan_list (task, status) VALUES (?,?)";
  db.query(sqlInsert, [task, status], (err, result) => {
    console.log(result);
  });
});

app.delete("/api/delete/:task", (req, res) => {
  const task = req.params.task;
  const sqlDelete = "DELETE FROM plan_list WHERE task = ?";

  db.query(sqlDelete, task, (err, result) => {
    if (err) console.log(err);
  });
});

app.put("/api/update", (req, res) => {
  const task = req.body.task;
  const status = req.body.status;
  const sqlUpdate = "UPDATE plan_list SET status = ? WHERE task = ?";

  db.query(sqlUpdate, [status, task], (err, result) => {
    if (err) console.log(err);
  });
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`runing on port ${PORT}`);
});
