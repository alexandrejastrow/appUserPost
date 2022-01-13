import { getRepository } from 'typeorm'
import User from '../../models/User'

export class GetManyUsersService {

    async execute(skips: string) {

        const repo = getRepository(User)
        const skip = parseInt(skips)

        const users = await repo.find({
            take: 10,
            skip
        })

        if (!users) {

            return new Error("User already existis")
        }

        return users
    }
}
