import { getRepository } from "typeorm";
import Post from "../../models/Post";

export class DeletePostService {

    async execute(id: string) {

        const repo = getRepository(Post)

        const post = await repo.find({ id })

        if (!post) {
            return new Error("Post already existis")
        }

        return await repo.delete(id)
    }
}