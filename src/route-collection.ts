import { Route } from "./route"

export interface RouteCollection {
    routes: Route[],
    add: (item: Route) => void,
    all: () => Route[]
}

export const RouteCollection: RouteCollection = {
    routes: [],

    add(item: Route) {
        this.routes.push(item)
    },

    all(): Route[] {
        return this.routes
    }
}