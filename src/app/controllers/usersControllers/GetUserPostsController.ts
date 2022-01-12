import { Request, Response } from 'express'
import { GetUserPostService } from '../../service/usersServices/GetUserPostService';

class GetUserPostsController {
    async handle(req: Request, res: Response) {

        const { username, id, email, avathar_url } = req.body

        const posts = new GetUserPostService()
        const resultPost = await posts.execute(id)

        if (resultPost instanceof Error) {
            return res.status(400).json(resultPost.message)
        }

        return res.status(200).json({ username, id, email, avathar_url, posts: resultPost })
    }
}

export default new GetUserPostsController()