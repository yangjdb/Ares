
module.exports = Object.assign({
    name: "Ares",                                      //系统名称
    // session: {
    //     SESSION_SSO: "yyfaxgroup.session",
    //     SESSION_NAME: "yyexch.session",
    //     SESSION_TOKEN: "136a3d03-9748-4f83-a54f-9b2a93f979a0"
    // }
}, process.env.NODE_ENV === "production" ? {
    port: process.env.port,                         //生产端口
    host: process.env.domain_sites_yyexch,          //生产域名
    redis: {                                        //redis全局配置
        port: process.env.redis_port,                   // redis port
        host: process.env.redis_host,                   // redis host
        family: process.env.redis_family,               // 4 (ipv4) or 6 (ipv6)
        password: process.env.redis_password,           // passport
        db: process.env.redis_db,                        // db
    },
} : {
    port: 3000,                                     //开发运行端口
    host: "http://localhost:3000",                  //主机域名
    redis: {                                        //redis全局配置
        port: 6379,                                     // Redis port
        host: "localhost",                     // Redis host
        family: 4,                                      // 4 (IPv4) or 6 (IPv6)
        password: "",                                   // passport
        db: 0,                                           // db
    },
});
