import { Request, Response } from "express";
import { getRepository } from "typeorm";
import bcrypt from 'bcryptjs'

import User from '../../models/User'
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


            const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1d' })


            return res.status(200).json({ ...user, token })
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }
}

export default new AuthController()