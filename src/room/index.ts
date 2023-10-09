import { Socket } from "socket.io";
import { v4 as uuidV4 } from "uuid";

const roomHandler = (socket: Socket) => {
  const createRoom = () => {
    const roomId = uuidV4();

    socket.emit("room-created", { roomId });
    console.log("create room success..");
  };

  const joinRoom = ({ roomId }: { roomId: string }) => {
    console.log(`join room success..
        Id : ${roomId}`);
    socket.join(roomId);
  };

  socket.on("join-room", joinRoom);
  socket.on("create-room", createRoom);
};

export default roomHandler;
