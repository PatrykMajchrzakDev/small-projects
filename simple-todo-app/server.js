//============SETUP============
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const MongoClient = require("mongodb").MongoClient;
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8000;

//============Database============
let db,
  dbConnectionStr = process.env.DB_STRING,
  dbName = "List-of-Tasks";

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }).then(
  (client) => {
    console.log(`Connected to ${dbName} Database`);
    db = client.db(dbName);
  }
);

//============View Engine============
app.set("view engine", "ejs");

//
app.use(express.static(__dirname + "/assets"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//============CRUD============

//READ
app.get("/", async (request, response) => {
  //Read db for all collections
  const todos = await db.collection("todos").find().toArray();
  response.render("index.ejs", { uncompletedTasks: todos });
});

//CREATE
app.post("/addTask", (request, response) => {
  db.collection("todos")
    .insertOne({ theTask: request.body.todoItem })
    .then((result) => {
      console.log("Todo Added");
      response.redirect("/");
    })
    .catch((error) => console.log(error));
});

//DELETE
app.delete("/deleteTask", (request, response) => {
  db.collection("todos")
    .deleteOne({ theTask: request.body.itemFromJS })
    .then((result) => {
      console.log("todo item deleted");
      response.json("Todo deleted");
    })
    .catch((error) => console.log(error));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
