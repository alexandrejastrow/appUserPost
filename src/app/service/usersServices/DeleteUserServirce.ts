import { getRepository } from 'typeorm'
import User from '../../models/User'

export class DeleteUserServirce {

    async execute(id: string) {

        const repo = getRepository(User)

        const users = await repo.findOne(id)

        if (!users) {
            return new Error('nao existe')
        }



        return await repo.delete(id)
    }
}
