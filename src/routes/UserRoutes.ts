import { Router } from "express";
import UserController from '../app/controllers/usersControllers/UserController'
import AuthController from '../app/controllers/usersControllers/AuthController'
import FindUsersController from '../app/controllers/usersControllers/FindUsersControler'
import DeleteUserControle from "../app/controllers/usersControllers/DeleteUserControle";
import UpdateUserController from "../app/controllers/usersControllers/UpdateUserController";
import GetUserPostsController from "../app/controllers/usersControllers/GetUserPostsController";

const userRoutes = Router()

userRoutes.post("/auth", AuthController.authenticate)

userRoutes.post("/users", UserController.handle)
userRoutes.get("/users/", FindUsersController.all)
userRoutes.get("/users/:range", FindUsersController.byRange)

userRoutes.get("/user/:id", FindUsersController.byId, GetUserPostsController.handle)
userRoutes.delete("/user/:id", DeleteUserControle.handle)

userRoutes.put("/user/:id", UpdateUserController.handle)
export default userRoutes