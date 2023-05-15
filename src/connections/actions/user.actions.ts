import { Socket } from "socket.io";

class UserSocket {
    async message(socket: Socket) {
        socket.on("connec", (data) => {
            console.log("Foi");
            console.log(data);
        });
    }
}

export default new UserSocket();
