import { UpdateUserServirce } from '../../service/usersServices/UpdateUserServirce'

import { Request, Response } from 'express'


class UpdateUserController {
    async handle(req: Request, res: Response) {

        const { id } = req.params
        const { username, email, password, avathar_url } = req.body

        const service = new UpdateUserServirce()

        const result = await service.execute({ id, username, email, password, avathar_url })

        if (result instanceof Error) {
            return res.status(400).json(result.message)
        }

        return res.json(result)
    }
}

export default new UpdateUserController()