import { getRepository } from 'typeorm'
import User from '../../models/User'

export class GetAllUsersService {

    async execute() {

        const repo = getRepository(User)

        const users = repo.find()

        return users
    }
}
