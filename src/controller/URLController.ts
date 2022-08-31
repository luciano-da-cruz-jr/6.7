import { Request, Response } from 'express'
import shortId from 'shortid'
import { config } from '../config/Constants'

export class URLController {
    public async shorten(req: Request, response: Response): Promise<void> {
        const { originURL } = req.body
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`

        response.json({ originURL, hash, shortURL })
    }

    public async redirect(req: Request, response: Response): Promise<void> {
        const { hash } = req.params
        const url = {
            originURL: 'https://web.dio.me/lab/construindo-encurtador-de-url/learning/81293ff9-4445-4ed9-8973-3223b2cb8eba',
	        hash: '0kSix2M5X',
	        shortURL: 'http://localhost:5000/0kSix2M5X'
        }

        response.redirect(url.originURL)
    }
}