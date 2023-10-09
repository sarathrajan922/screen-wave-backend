import { Socket } from "socket.io";

const roomHandler= (socket: Socket)=>{
    socket.on('join-room',()=>{
        console.log('join room success..')
    })
}

export default roomHandler;