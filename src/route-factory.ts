import { Express, Request } from "express";
import { RouteCollection } from "./route-collection";
import { RequestType } from "./types";
import { Route, RouteProxy } from "./route";

export class RouteFactory {

    private routes: RouteCollection;

    public constructor(routes: RouteCollection) {
        this.routes = routes
    }

    public get(path: string, model: (request: Request) => Record<PropertyKey, unknown>) {
        const route = new Route(path, RequestType.GET, model)
        this.routes.add(route)
        return new RouteProxy(route)
    }


}