import { Request, Response } from 'express'
import { UserRequest } from '../../models/User';

import CreateUserService from '../../service/usersServices/CreateUserCategory';
class UserControler {
    async handle(req: Request, res: Response) {

        const { username, email, avathar_url, password } = req.body

        const service = new CreateUserService()

        const result = await service.execute({ username, email, avathar_url, password })

        if (result instanceof Error) {
            return res.status(400).json(result.message)
        }

        const data = result as UserRequest

        delete data.password

        return res.status(201).json(data)
    }
}

export default new UserControler()