import express from 'express';
import http from 'http';
import { Server  } from 'socket.io';

const port = 8080;
const app = express();
const server = http.createServer(app);
const io = new Server(server); 
io.on('connection', ()=>{
    console.log('user is connected');
});
server.listen(port,()=>{
    console.log(`server listening on port ${port}`)
});
