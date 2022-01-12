import { getRepository } from "typeorm";
import User from "../../models/User";


type UserRequest = {

    username: string,
    email: string,
    avathar_url: string
    password?: string,

}

class CreateUserService {
    async execute({ username, email, avathar_url, password }: UserRequest): Promise<User | Error> {

        const repo = getRepository(User)

        if (await repo.findOne({ email })) {

            return new Error("User already existis")
        }

        const user = repo.create({ username, email, avathar_url, password })

        await repo.save(user)

        return user
    }
}

export default CreateUserService