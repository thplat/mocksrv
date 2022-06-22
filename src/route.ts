import { Request } from "express";
import { StatusCode } from "./status";
import { RequestType, RouteDefinition } from "./types";

export class Route implements RouteDefinition {

    public path
    public requestType
    public statusCode = StatusCode.OK
    public resolver = (request: Request) => {}
    public headers: Record<string, string> = {}
    
    public constructor(path: string, requestType: RequestType, resolver: (request: Request) => void) {
        this.path = path
        this.requestType = requestType
        this.resolver = resolver
    }

}

export class RouteProxy {

    private route;

    public constructor(route: RouteDefinition) {
        this.route = route
    }

    public status(code: StatusCode) {
        this.route.statusCode = code
        return this
    }

    public headers(headers: Record<string, string>) {
        this.route.headers = {
            ...this.route.headers,
            ...headers
        }
    }

}