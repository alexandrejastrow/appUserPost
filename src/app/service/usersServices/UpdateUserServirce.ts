import { getRepository } from 'typeorm'
import User from '../../models/User'


type UserUpdateRequest = {
    id: string
    username?: string,
    email?: string,
    avathar_url?: string
    password?: string,

}

export class UpdateUserServirce {

    async execute({ id, username, email, avathar_url, password }: UserUpdateRequest) {

        const repo = getRepository(User)

        const user = await repo.findOne(id)

        if (!user) {

            return new Error('nao existe')
        }

        user.username = username ? username : user.username
        user.email = email ? email : user.email
        user.avathar_url = avathar_url ? avathar_url : user.avathar_url
        user.password = password ? password : user.password

        await repo.save(user)

        return user
    }
}
