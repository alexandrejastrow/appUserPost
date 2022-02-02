import { Request, Response } from 'express'
import { UserRequest } from '../../models/User';
import { GetPostService } from '../../service/postServices/GetPostService';

class GetUserPostsController {
    async handle(req: Request, res: Response) {

        const { user } = req.body

        const posts = new GetPostService()
        const resultPost = await posts.execute(user.id)

        if (resultPost instanceof Error) {
            return res.status(400).json(resultPost.message)
        }

        const data = user as UserRequest
        delete data.password

        return res.status(200).json({ ...data, posts: resultPost })
    }
}

export default new GetUserPostsController()