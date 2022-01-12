import { getRepository } from 'typeorm'
import User from '../../models/User'

export class GetOneUserService {

    async execute(id: string) {

        const repo = getRepository(User)

        const user = await repo.findOne({ id })

        if (!user) {

            return new Error('nao existe')
        }

        return user
    }
}
