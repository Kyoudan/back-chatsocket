import { io } from "../app";
import UserActions from "../connections/actions/user.actions";

io.on("connection", (socket) => {
    console.log(`Socket connected: ${socket.id}`);
    UserActions.message(socket);
});

export default io;
