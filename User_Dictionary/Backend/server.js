
const http = require("http");
const users = require("./db");
const { error } = require("console");

const server = http.createServer((req, res) => {
res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader("Access-Control-Allow-Methods", "GET");

  const parts = req.url.split("/");

  if (req.method === "GET" && parts[1] === "user") {
    const id = Number(parts[2]);
    const user = users.find(u => u.id === id);

    if (!user) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "User not found" }));
      return;
    }

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(user));
  } 
   
});

server.listen(2000, () => {
  console.log("Server running on port 2000");
});

