import { Request, Response } from 'express'

import CreateUserService from '../../service/usersServices/CreateUserCategory';
class UserControler {
    async handle(req: Request, res: Response) {

        const { username, email, avathar_url, password } = req.body

        const service = new CreateUserService()

        const result = await service.execute({ username, email, avathar_url, password })

        if (result instanceof Error) {
            return res.status(400).json(result.message)
        }

        return res.status(201).json(result)
    }
}

export default new UserControler()