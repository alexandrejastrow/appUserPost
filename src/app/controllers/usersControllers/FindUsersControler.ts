import { GetOneUserService } from '../../service/usersServices/GetOneUserService'
import { GetManyUsersService } from '../../service/usersServices/GetManyUsersService'

import { Request, Response, NextFunction } from 'express'
import { UserRequest } from '../../models/User'
class FindUsersController {


    async byId(req: Request, res: Response, next: NextFunction) {

        const { id } = req.params
        const service = new GetOneUserService()

        try {

            const user = await service.execute(id)
            req.body.user = user

            next()
        } catch (error) {
            return res.status(400).end()
        }


    }

    async byRange(req: Request, res: Response) {

        const { skip } = req.params

        const service = new GetManyUsersService()

        if (service instanceof Error) {
            return res.status(400).end()
        }
        try {

            const users = await service.execute(skip)

            const data = users as Array<UserRequest>

            data.map(data => delete data.password)

            return res.status(200).json(data)

        } catch (error) {
            return res.status(400).end()
        }


    }
}


export default new FindUsersController()