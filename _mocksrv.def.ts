import { RouteFactory } from "./src/route-factory";
import { repeat, name, email, paginate } from './src/models'

export default function(this: RouteFactory) {
    this.get('/', () => ({
        people: repeat(() => ({
            name: name(),
            email: email()
        }), 5)
    }))
    .status(404)
    .headers({
        'Authorization': 'Bearer 12346'
    })

    this.get('/person', () => ({
        name: name(),
        email: email()
    }))

    this.get('/people', () => ({
        people: paginate(() => ({
            name: name(),
            email: email(),
        }), {
            total: 50,
            perPage: 5
        })
    }))
}