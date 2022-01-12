import { getRepository } from 'typeorm'
import Post from '../../models/Post'

export class GetUserPostService {

    async execute(id: string) {

        const repo = getRepository(Post)

        const posts = repo.find({ user_id: id })

        return posts
    }
}
