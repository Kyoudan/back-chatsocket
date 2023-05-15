import { PrismaClient } from "@prisma/client";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import prismaClient from "./api/prismaClient";
import router from "./routes";

const app = express();
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);


const server = http.createServer(app);
const io = new Server(server);

export { server, io, app };
