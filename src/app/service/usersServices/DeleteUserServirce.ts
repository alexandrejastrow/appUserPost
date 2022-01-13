import { getRepository } from 'typeorm'
import User from '../../models/User'
import { GetPostService } from '../postServices/GetPostService'
import { DeletePostService } from '../postServices/DeletePostService'
export class DeleteUserServirce {

    async execute(id: string) {

        const repo = getRepository(User)

        const users = await repo.findOne(id)

        if (!users) {
            return new Error("User already existis")
        }


        const service = new GetPostService()

        const posts = await service.execute(id)
        const delPosts = new DeletePostService()

        await posts.map(post => delPosts.execute(post.id))

        return await repo.delete(id)
    }
}
