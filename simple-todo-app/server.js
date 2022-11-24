//============SETUP============
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const MongoClient = require("mongodb").MongoClient;
const PORT = process.env.PORT || 8000;
dotenv.config({ path: "config.env" });

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
app.use(express.static("assets"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//============CRUD============
app.get("/", async (request, response) => {
  // await db.collection('todos')
  response.render("index.ejs");
});

app.post("/addTask", (request, response) => {
  db.collection("todos")
    .insertOne({ theTask: request.body.todoItem })
    .then((result) => {
      console.log("Todo Added");
      response.redirect("/");
    })
    .catch((error) => console.log(error));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
