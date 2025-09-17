module.exports = {
    async register(ctx) {
        const { username, email, password } = ctx.request.body;

        const user = await strapi
            .plugin('users-permissions')
            .service('user')
            .add({ username, email, password });

        ctx.send({ user });
    },

    async login(ctx) {
        const { identifier, password } = ctx.request.body;

        const result = await strapi
            .plugin('users-permissions')
            .service('auth')
            .callback('local', { identifier, password });

        ctx.send(result);
    },
};
