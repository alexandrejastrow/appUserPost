import { Router } from "express";
import UserController from '../app/controllers/usersControllers/UserController'
import AuthController from '../app/controllers/usersControllers/AuthController'
import FindUsersController from '../app/controllers/usersControllers/FindUsersControler'
import DeleteUserControle from "../app/controllers/usersControllers/DeleteUserControle";
import UpdateUserController from "../app/controllers/usersControllers/UpdateUserController";
import GetUserPostsController from "../app/controllers/usersControllers/GetUserPostsController";
import AuthMiddleware from "../app/middlewares/AuthMiddleware";

const userRoutes = Router()

userRoutes.post("/auth", AuthController.authenticate)

userRoutes.post("/users", UserController.handle)

userRoutes.get("/users/:skip", FindUsersController.byRange)

userRoutes.get("/user/:id", FindUsersController.byId, GetUserPostsController.handle)
userRoutes.delete("/user/:id", AuthMiddleware.auth, DeleteUserControle.handle)

userRoutes.put("/user/:id", AuthMiddleware.auth, UpdateUserController.handle)


export default userRoutes