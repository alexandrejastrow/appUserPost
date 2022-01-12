import { GetAllUsersService } from '../../service/usersServices/GetAllUsersService'
import { GetOneUserService } from '../../service/usersServices/GetOneUserService'
import { GetManyUsersService } from '../../service/usersServices/GetManyUsersService'

import { Request, Response, NextFunction } from 'express'
class FindUsersController {

    async all(req: Request, res: Response) {

        const service = new GetAllUsersService()

        const users = await service.execute()

        return res.status(200).json(users)

    }

    async byId(req: Request, res: Response, next: NextFunction) {

        const { id } = req.params
        const service = new GetOneUserService()

        try {

            const user = await service.execute(id)
            req.body = user
            next()
        } catch (error) {
            return res.status(400).end()
        }


    }

    async byRange(req: Request, res: Response) {

        const { range } = req.params
        const service = new GetManyUsersService()

        try {

            const users = await service.execute(range)
            return res.status(200).json(users)
        } catch (error) {
            return res.status(400).end()
        }


    }
}


export default new FindUsersController()