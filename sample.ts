import { Request } from "express";
import { createServer } from "./src/mocksrv";
import { email, name, repeat } from "./src/models";
import { RouteFactory } from "./src/route-factory";

createServer(function(this: RouteFactory) {
    this.get('/people', (request: Request) => ({
        people: repeat(() => ({
            name: name(),
            email: email(),
        }), 5)
    }))
})