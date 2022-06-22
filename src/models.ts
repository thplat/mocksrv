import { faker } from '@faker-js/faker'
import { Request } from 'express'
import { NotFoundError } from './errors/NotFoundError'
import { PaginationConfig } from './types'

/**
 * Creates an array of input objects from a given factory with any given length
 * 
 * @param factory 
 * @param times 
 */
export const repeat = (factory: () => Object, times: number) => {
    return Array.from({length: times}, (value: unknown, index: number) => ({ ...factory(), id: index + 1 }))
}

/**
 * Returns a paginated array of input objects from a given factory constrainted by {PaginationConfig}
 * 
 * @param request 
 * @param factory 
 * @param config 
 */
export const paginate = (request: Request, factory: () => Object, config: PaginationConfig) => {
    const page = parseInt(request.query.page as string) || 1
    const maxPages = Math.ceil(config.total / config.perPage)
    const offset = (page-1) * config.perPage


    if (page > maxPages || page < 1) {
        throw new NotFoundError(`Page not found`)
    }

    return Array.from({length: config.perPage}, (value: unknown, index: number) => ({
        ...factory(), id: offset + 1 + index 
    }))
}

export const name = () => faker.name.findName()
export const email = () => faker.internet.email()