import { server } from "./app";
import { config } from "dotenv";
import "./sockets";
config();

const port = process.env.PORT || 3001;

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
