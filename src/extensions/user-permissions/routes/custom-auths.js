module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/auth/local/register',
            handler: 'custom-auth.register',
            config: {
                auth: false,
                policies: [],
            },
        },
        {
            method: 'POST',
            path: '/auth/local',
            handler: 'custom-auth.login',
            config: {
                auth: false,
                policies: [],
            },
        },
    ],
};
