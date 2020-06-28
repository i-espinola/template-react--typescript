// Express server
import Setup from './setup';
import http from 'http';
// import favicon from 'express-favicon';
import express from 'express';
import path from 'path';

const app = express();

// app.use(favicon(Setup.path + Setup.favicon));
app.use(express.static(Setup.path));
app.use(express.static(path.join(Setup.path, Setup.public)));
app.get(Setup.request, (request, response) => {
  response.sendFile(path.join(Setup.path, Setup.public, Setup.file));
});

// Start Serve
const server = http.createServer(app);

server.listen(Setup.port, () => {
  console.log(Setup.banner);
});
