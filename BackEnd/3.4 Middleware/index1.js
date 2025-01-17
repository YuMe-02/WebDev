import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// mounts the body parser : app.use([path], middlewareFunction);
// gives a body to every request
app.use(bodyParser.urlencoded({ extended: true }));


// Postman Test: localhost:3000
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Postman Test: localhost:3000/submit
app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
