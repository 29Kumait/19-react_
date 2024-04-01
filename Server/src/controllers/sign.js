import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { logError, logInfo } from "../util/logging.js";

export const handleSignUp = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;
    const user = await createUser({ email, username, password });
    const token = generateAuthToken(user._id);
    logInfo(`Token generated for user: ${user.username}`);
    res.status(201).send({ token });
  } catch (err) {
    next(err);
  }
};

export const handleSignIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await findUserByCredentials(username, password);
    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }
    const token = generateAuthToken(user._id);
    res.send({ token });
  } catch (err) {
    logError(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createUser = async (userData) => {
  try {
    const { email, username } = userData;
    const userExists = await User.findOne({ $or: [{ email }, { username }] });
    if (userExists) {
      throw new Error(
        userExists.email === email
          ? "User with this email already exists"
          : "User with this username already exists",
      );
    }
    const user = new User(userData);
    await user.save();
    logInfo("User saved to the database:", user);
    return user;
  } catch (error) {
    logError(
      `Error creating user ${userData.username} with email ${userData.email}: ${error.message}`,
    );
    throw error;
  }
};

const generateAuthToken = (userId) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "24h" }); //  Expire in 24 hours
};

const findUserByCredentials = async (username, password) => {
  const user = await User.findOne({ username });
  if (user && (await user.comparePassword(password))) {
    return user;
  }
  return null;
};
