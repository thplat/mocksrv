import { Express, Response } from 'express'
import { NotFoundError } from './errors/NotFoundError';
import { StatusCode } from './status';
import { RouteDefinition } from "./types";

export class RouteBuilder {

    public constructor(
        protected routes: RouteDefinition[],
        protected express: Express
    ) {}

    /**
     * Creates express routes from route definitions
     */
    public createRoutes() {
        this.routes.forEach((route) => {

            this.validateRoute(route)

            this.express[route.requestType](route.path, (req, res) => {

                this.applyHeaders(route, res)
                this.applyStatus(route, res)

                try {
                    res.send(route.resolver(req))
                } catch(error) {
                    const errorBody = {
                        error: 'An Error occured'
                    }

                    if (error instanceof NotFoundError) {
                        route.statusCode = StatusCode.NOT_FOUND
                        errorBody.error = error.message
                    }

                    res.send(errorBody)
                }
            })

        })        
    }

    /**
     * Ensures a route has a path and requestType
     * 
     * @param route 
     */
    protected validateRoute(route: RouteDefinition) {
        if (typeof route.path === 'undefined') {
            throw new Error(`No path given for route`)
        }

        if (typeof route.requestType === 'undefined') {
            throw new Error(`${route.path} has no request type`)
        }
    }

    /**
     * Applies all headers from the route to the response
     * 
     * @param route 
     * @param res 
     */
    protected applyHeaders(route: RouteDefinition, res: Response) {
        Object.entries(route.headers).forEach(([key, value]) => {
            res.set(key, value)
        })
    }

    /**
     * Applies the status code from the route to the response
     * 
     * @param route 
     * @param res 
     */
    protected applyStatus(route: RouteDefinition, res: Response) {
        res.status(route.statusCode)
    }

}