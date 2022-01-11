import { Request, Response } from "express";
import { getRepository } from "typeorm";
import bcrypt from 'bcryptjs'

import User, { TypeUser } from '../models/User'
import jwt from 'jsonwebtoken'


class AuthController {
    async authenticate(req: Request, res: Response) {

        try {
            const repo = getRepository(User)
            const { email, password } = req.body

            const user = await repo.findOne({ where: { email } })

            if (!user) {
                return res.status(401)
            }

            const isValidate = await bcrypt.compare(password, user.password)

            if (!isValidate) {
                return res.status(401).json({ message: "User not authorized" })
            }

            const secret = process.env.JWT_SECRET as string

            const data = user as TypeUser

            data.token = jwt.sign({ id: user.id }, secret, { expiresIn: '1d' })

            delete data.password

            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }
}

export default new AuthController()