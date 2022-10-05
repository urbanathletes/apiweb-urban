import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import SequelizeStore from "connect-session-sequelize";
import cookieParser from "cookie-parser";

import indexRoute from "./routes/index.js";

// const sessionStore = SequelizeStore(session.Store);
// const store = new sessionStore({
//   db: db
// })
// // ## Generate database tables
// import db from "./config/Database.js";
// try {
//   await db.authenticate();
//   console.log("databases Connected...");
//   // await db.sync();
//   // store.sync();
// } catch (error) {
//   console.error(error);
// }

dotenv.config();

const app = express();

// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: true,
//   store: store,
//   cookie: {
//     secure: "auto"
//   }
// }));

app.use(cookieParser())
app.use(cors({
  credentials: true,
  // origin: 'http://localhost:3001'
  origin: [process.env.ACCESS_OROGIN2, process.env.ACCESS_OROGIN1]
}));
app.use(express.json());
app.use(indexRoute);

app.listen(process.env.APP_PORT, () => {
  console.log("Server up port '" + process.env.APP_PORT + "' and running ...");
});