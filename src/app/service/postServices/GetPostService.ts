import { getRepository } from 'typeorm'
import Post from '../../models/Post'

export class GetPostService {

    async execute(id: string) {

        const repo = getRepository(Post)

        const posts = await repo.find({ user_id: id })

        return posts
    }
}
