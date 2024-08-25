import User from "../Models/UserModel.js";
import expressAsyncHandler from "express-async-handler";
import { users } from "../Data.js";

//@desc import all users
//@route POST /api/users/import/all
//@access Private/Admin

const importUsers = expressAsyncHandler(async (req, res) => {
    console.log("importUsers function called");
    await User.deleteMany({}); //delete all users in the database
    const createdUsers = await User.insertMany(users);// insert all users in the database
    res.status(201).send({ createdUsers });
});

// const importUsers = expressAsyncHandler(async (req, res) => {
//     try {
//         console.log("importUsers function called");
//         await User.deleteMany({}); //delete all users in the database
//         const createdUsers = await User.insertMany(users);// insert all users in the database
//         res.status(201).send({ createdUsers });
//     } catch (error) {
//         console.error("Error in importUsers:", error);
//         res.status(500).send({ message: "Failed to import users" });
//     } ----use this to catch error
// });

export {importUsers};