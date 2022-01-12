import { Request, Response } from 'express'

import { DeleteUserServirce } from '../../service/usersServices/DeleteUserServirce';

class DeleteControler {
    async handle(req: Request, res: Response) {

        const { id } = req.params

        const service = new DeleteUserServirce()

        const result = await service.execute(id)

        if (result instanceof Error) {
            return res.status(400).json(result.message)
        }

        return res.status(204).end()
    }
}

export default new DeleteControler()