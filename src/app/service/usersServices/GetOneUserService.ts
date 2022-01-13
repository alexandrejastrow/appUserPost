import { getRepository } from 'typeorm'
import User from '../../models/User'

export class GetOneUserService {

    async execute(id: string) {

        const repo = getRepository(User)

        const user = await repo.findOne({ id })

        if (!user) {

            return new Error("User already existis")
        }

        return user
    }
}
