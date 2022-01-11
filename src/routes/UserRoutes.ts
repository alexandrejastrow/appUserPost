import { Router } from "express";
import UserController from '../app/controllers/UserController'
import AuthController from '../app/controllers/AuthController'

const userRoutes = Router()

userRoutes.post("/users", UserController.store)
userRoutes.post("/auth", AuthController.authenticate)
userRoutes.get("/users/:index", UserController.index)
export default userRoutes