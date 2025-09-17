type MiddlewareEntry =
    | string
    | {
        name: string
        config?: {
            enabled?: boolean
            origin?: string[]
            methods?: string[]
            headers?: string[]
            credentials?: boolean
        }
    }

const middlewares: MiddlewareEntry[] = [
    'strapi::logger',
    'strapi::errors',
    'strapi::security',
    {
        name: 'strapi::cors',
        config: {
            enabled: true,
            origin: ['http://localhost:3000'], // frontend adresin
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            headers: ['Content-Type', 'Authorization'],
            credentials: true,
        },
    },
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
]

export default middlewares
