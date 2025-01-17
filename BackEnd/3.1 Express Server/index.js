import express from "express";
const app = express();
const port = 3000;

// Ch 3.2
// to navigate, got to the browser and directories after the root '/'
// Close a port "kill pid"
// server "/" grabs to the root directory (e.g this case == homepage) and sends hello world
app.get("/", (req, res) => {
  // console.log(req.rawHeaders);
  
  // can send raw text
  res.send("Hello, World!");


  // can send HTML text
  res.send("<h1> Formatted Text  through GET req! </h1>");
});

app.get("/about", (req, res) => {
  // console.log(req.rawHeaders);

  // can send HTML text
  res.send("<h1> Formatted Text  through GET req! </h1> <p> This is the about me page of YuMe </p>");
});


app.get("/contact", (req, res) => {
  // console.log(req.rawHeaders);

  // can send HTML text
  res.send("<h1> This my Contact </h1> <p> YuMe@djoemama.com </p>");
});



// Ch 3.1
// Server Listens on Port 3000 
app.listen(port, () => {
  console.log(`Server running on port ${port}.`); // Call Back Ftn
});

// localhost: 3000 -- server hosted on our local machine
// can be reached https://localhost:3000

// port is a door to a computer for a specific task
// port is bound to a socket
// socket allows traffic in
// sockets have more than one port


// Monitor traffic
// windows 
// netstat -ano | findstr "LISTENING"

// Mac - Linux
// sudo lsof -i -P -n | grep LISTEN
