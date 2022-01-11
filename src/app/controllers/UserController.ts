import { Request, Response } from 'express'

import { getRepository } from 'typeorm'

import User, { TypeUser } from '../models/User';
class UserControler {
    async index(req: Request, res: Response) {
        const repo = getRepository(User)

        let skip = parseInt(req.params.index)

        const users = await repo.find({
            take: 10,
            skip
        })
        users.map((user: TypeUser) => {

            delete user.password
        })

        res.json({ length: users.length, data: users })
    }
    async store(req: Request, res: Response) {

        try {

            const repo = getRepository(User)

            const { username, email, password, avathar_url } = req.body

            const userExistis = await repo.findOne({ where: { email } })

            if (userExistis) {
                res.status(400).json({ message: "user already existis" })
            }

            const user = repo.create({ email, password, username, avathar_url })

            await repo.save(user)

            const data = user as TypeUser

            delete data.password

            return res.status(201).json(data)

        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }
}

export default new UserControler()