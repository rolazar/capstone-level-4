import express, { Request, Response } from "express";
import cors from "cors";
import { root } from "./routes/root";
import { api } from "./routes/api";

const hostname = "localhost"; // Local domain
const port = 8000; // Common backends ports: 8000, 9000, 3000
const path = "/"; // The path where server info will be rendered in a browser

const app = express(); // Instantiate the Express.js object
app.use(cors());
app.get("/", root); // The handler runs when the path is visited in the URL
app.get("/api", api);
app.listen(port, hostname, handleListen); // The server listens at the specified hostname and port

function handleListen() {
  console.log(`Listening on http://${hostname}:${port}...`);
  console.log(`Open a new terminal and type 'npm run build'`);
  console.log(`To debug, start this server in a JavaScript Debug Terminal`);
}
