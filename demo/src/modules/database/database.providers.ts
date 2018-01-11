// import { Sequelize } from 'sequelize-typescript';
// import { Cat } from '../cats/cat.entity';

export const databaseProviders = [
    // {
    //     provide: 'SequelizeToken',
    //     useFactory: async () => {
    //         console.log('SequelizeToken');
    //         const sequelize = new Sequelize({
    //             dialect: 'mysql',
    //             host: 'localhost',
    //             port: 3306,
    //             username: 'root',
    //             password: '',
    //             database: 'test',
    //         });
    //         sequelize.addModels([Cat]);
    //         await sequelize.sync();
    //         return sequelize;
    //     },
    // },
    {
        provide: 'customToken',
        useValue: {
            a: 'aaa'
        }
    }
];
