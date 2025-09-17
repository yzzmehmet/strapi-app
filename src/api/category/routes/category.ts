/**
 * Custom router for Category
 */

export default {
    routes: [
        {
            method: 'GET',
            path: '/categories',
            handler: 'category.find',
            config: {
                auth: false,
                policies: [],
            },
        },
        {
            method: 'GET',
            path: '/categories/:id',
            handler: 'category.findOne',
            config: {
                auth: false,
                policies: [],
            },
        },
    ],
};
