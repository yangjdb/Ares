## 启动

> 安装

```bash
$ git clone https://github.com/nestjs/typescript-starter.git project
$ cd project
$ npm install
```
---

> 初始结构

![](./img/nest.png)

> 编码

推荐使用TypeScript编码，兼容ES6语法。

> 构建命令

```bash
$ npm run start //开发启动
$ npm run start:watch //nodemon启动
$ npm run prestart:prod //ts编译
$ npm run start:prod //生产启动
```

> 脚本

```js
import {NestFactory} from '@nestjs/core';
import {ApplicationModule} from './modules/app.module';
import "reflect-metadata";

import * as express from 'express';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';


async function bootstrap() {
    const server = express();
    const app = await NestFactory.create(ApplicationModule, server);
    await app.use(express.static('public'));
    await app.use(compression());
    await app.use(cookieParser());
    await app.set('views', './view');
    await app.set('view engine', 'pug');
    await app.use(expressSession());
    await app.listen(4000);
}

bootstrap();

```

## 模块

> 主模块 app.module.js

```js
import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module'; //子模块
import { DatabaseModule } from './database/database.module'; //动态模块

@Module({
    imports: [CatsModule, DatabaseModule.forRoot('moduleName')]
})
export class ApplicationModule {

}
```

> 子模块 cat.module.js

```js
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
    controllers: [CatsController],
    components: [CatsService],
    exports: [CatsService]
})
export class CatsModule {}
```

> 全局模块 global.module.js

```js
import { Module, Global } from '@nestjs/common';
import { GlobalService } from './global.service';

@Global()
@Module({
    components: [GlobalService],
    exports: [GlobalService]
})
export class GlobalModule {}
```

> 动态模块 dynamic.module.js

```js
import { Module, DynamicModule } from '@nestjs/common';
import { createDatabaseProviders } from './database.providers';
import { Connection } from './connection.component';

@Module({
  components: [Connection],
})
export class DatabaseModule {
  static forRoot(entities = [], options?): DynamicModule {
    const providers = createDatabaseProviders(options, entities);
    return {
      module: DatabaseModule,
      components: providers,
      exports: providers,
    };
  }
}
```

## 控制器

> cats.controller.js

```js
import { Controller, Get, Post, Body, Bind, Dependencies } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
@Dependencies(CatsService)
export class CatsController {
  constructor(catsService) {
    this.catsService = catsService;
  }

  @Post()
  @Bind(Body())
  async create(createCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll() {
    return this.catsService.findAll();
  }
}
```

## 组件

> cats.service.js

```js
import { Component } from '@nestjs/common';

@Component()
export class CatsService {
  constructor() {
    this.cats = [];
  }

  create(cat) {
    this.cats.push(cat);
  }

  findAll() {
    return this.cats;
  }
}
```

## 中间件

> logger.middleware.ts

```js
import { Middleware } from '@nestjs/common';

//---------类写法----------
@Middleware()
export class LoggerMiddleware {
  async resolve(name) {
    await someAsyncFn();

    return async (req, res, next) => {
      await someAsyncFn();
      console.log(`[${name}] Request...`); // [ApplicationModule] Request...
      next();
    };
  }
}

//---------函数写法----------
export const loggerMiddleware = (req, res, next) => {
  console.log(`Request...`);
  next();
};

```

> app.module.js

```js
import { Module } from '@nestjs/common';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';

@Module({
    imports: [CatsModule],
})
export class ApplicationModule {
    configure(consumer) {
        consumer.apply(LoggerMiddleware)
            .with('ApplicationModule')
            .forRoutes(CatsController);
    }
}
```

## 校验规则
