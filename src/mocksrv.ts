import express, { Express, Request, Response } from 'express'
import chalk from 'chalk'
import { RouteCollection } from './route-collection';
import { RouteFactory } from './route-factory';
import { Route } from './route';
import { RouteBuilder } from './route-builder';

export class Server {

    protected express: Express;
    protected definitions: () => void;
    protected port = 5000;

    constructor(definitions: (this: RouteFactory) => void, port: number = 5000) {
        this.express = express()
        this.definitions = definitions
        this.port = port
    }

    public run() {
        const route = new RouteFactory(RouteCollection)
        this.definitions.bind(route)()

        const builder = new RouteBuilder(RouteCollection.all(), this.express)
        builder.createRoutes()

        this.express.listen(this.port, () => {
            console.log(chalk.green(`MockSrv Listening on Port ${this.port}:`) + (` http://localhost:${this.port}`))            
        })
    }
}

export function createServer(definitions: (this: RouteFactory) => void, port: number = 5000) {
    const mocksrv = new Server(definitions, port)
    mocksrv.run()
}