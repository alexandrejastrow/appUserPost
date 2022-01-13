import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"


interface TokenRequest {
    id: string
    iat: number
    exp: number
}
class AuthMiddleware {

    async auth(req: Request, res: Response, next: NextFunction) {

        const { authorization } = req.headers

        if (!authorization) {
            return res.status(401).end()
        }

        const token = authorization.replace('Bearer', '').trim()

        try {
            const secret = process.env.JWT_SECRET as string

            const data = jwt.verify(token, secret)

            const { id } = data as TokenRequest

            req.params.userId = id

            next()
        } catch (error) {
            return res.status(400).json({ error })
        }
    }
}

export default new AuthMiddleware()