import express from "express";
import { handleSignUp, handleSignIn } from "../controllers/sign.js";

const routerSing = express.Router();

routerSing.post("/signup", handleSignUp);
routerSing.post("/signin", handleSignIn);
export default routerSing;