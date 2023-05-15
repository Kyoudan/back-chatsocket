import { Socket } from "socket.io";

class UserSocket {
    async message(socket: Socket) {
        socket.on("message", (data) => {
            console.log(data);
        });
    }
}

export default new UserSocket();
