import { getRepository } from 'typeorm'
import User from '../../models/User'

export class GetManyUsersService {

    async execute(range: string) {

        const repo = getRepository(User)
        const skip = parseInt(range)

        const users = await repo.find({
            take: 10,
            skip
        })

        if (!users) {

            return new Error('nao existe')
        }

        return users
    }
}
