const http = require("http");
const fs = require("fs/promises");
const path = require("path");
const stories = require("./db");

const PORT = 2000;

const server = http.createServer(async (req, res) => {
  const url = req.url;
  const method = req.method;

  try {
    // HOME
    if (url === "/" && method === "GET") {
      const filePath = path.join(__dirname, "../frontend/Paranormal.html");
      const html = await fs.readFile(filePath);
      res.writeHead(200, { "Content-Type": "text/html" });
      return res.end(html);
    }

    // READ PAGE
    if (url === "/read" && method === "GET") {
      const filePath = path.join(__dirname, "../frontend/Read.html");
      const html = await fs.readFile(filePath);
      res.writeHead(200, { "Content-Type": "text/html" });
      return res.end(html);
    }

    // STORIES API
    if (url === "/stories" && method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(stories));
    }

    // STATIC JS (rendercard.js)
    if (url === "/rendercard.js") {
      const jsPath = path.join(__dirname, "../frontend/rendercard.js");
      const js = await fs.readFile(jsPath);
      res.writeHead(200, { "Content-Type": "application/javascript" });
      return res.end(js);
    }

    // 404
    res.writeHead(404);
    res.end("Not Found");

  } catch (err) {
    res.writeHead(500);
    res.end("Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
