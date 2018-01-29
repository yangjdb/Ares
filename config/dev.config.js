module.exports = {
    server: {
        port: 3000
    },
    cookie: {
        maxAge: 1800e3
    },
    redis: {
        host: 'localhost',
        port: 6379,
        pass: '12dianch',
        db: 1,
        ttl: 1800,
        logErrors: true
    }
};