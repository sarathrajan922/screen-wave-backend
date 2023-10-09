import express from 'express';
import http from 'http';
import { Server  } from 'socket.io';
import cors from 'cors'

const port = 8080;
const app = express();
app.use(cors)
const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin: true,
        methods: ["GET", "POST"]
    }
});
io.on('connection', (socket)=>{
    console.log('user is connected');

    socket.on('disconnect',()=>{
        console.log("user is disconnected")
    })
});
server.listen(port,()=>{
    console.log(`server listening on port ${port}`)
});
