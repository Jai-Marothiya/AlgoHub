import db from "../src/db.js";
import jwt from "jsonwebtoken";
import axios from "axios";

const createToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_SECRET_KEY, {
    expiresIn: "30d",
  });
};

export const googleLogin = async (req, res) => {
  const { token_id, email, name } = req.body;
  console.log(req.body);

  try {
    // Verify the ID token
    const response = await axios.get(
      "https://oauth2.googleapis.com/tokeninfo",
      {
        params: {
          access_token: token_id,
        },
      }
    );

    const { email_verified } = response.data;
    console.log("email_verified: ", email_verified);

    if (email_verified) {
      // Check if the user exists in the database
      const user = await db("users").where({ email }).first();
      console.log("user: ", user);

      if (user) {
        // User exists, respond accordingly
        console.log("User already exists:", user);
        const token = createToken({ id: user.id, user: user });
        return res
          .status(200)
          .json({ message: "Successfully Logged in", token, user });
      } else {
        // User does not exist, insert new user
        const newUser = await db("users")
          .insert({ email, name })
          .returning("*");

        console.log("newUser created: ", newUser[0]);

        const token = createToken({ id: newUser.id, user: newUser[0] });

        return res
          .status(201)
          .json({ message: "User created", token, user: newUser[0] });
      }
    } else {
      return res.status(400).json({ message: "Email not verified" });
    }
  } catch (error) {
    console.error("Error during Google login:", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  if (req.headers && req.headers.authorization) {
    var authorization = req.headers.authorization,
      decoded;

    try {
      decoded = await jwt.verify(authorization, process.env.REFRESH_SECRET_KEY);
    } catch (e) {
      return res.status(401).send("unauthorized");
    }
    console.log("decoded: ", decoded);
    let user = await db("users").where({ id: decoded.user.id }).first();
    console.log("user: ", user);
    return res.status(200).json(user);
    // return res.send(200).json(decoded);
  }
  return res.status(500);
};
