import { Request } from "express";
import { StatusCode } from "./status"

export interface RouteDefinition {
    path: string,
    requestType: RequestType,
    statusCode: StatusCode,
    resolver: (request: Request) => Record<PropertyKey, unknown> | void,
    headers: Record<string, string>,
}

export interface PaginationConfig {
    total: number,
    perPage: number,
}

export enum RequestType {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete'
}