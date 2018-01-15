import * as path from 'path';

const configPath = path.resolve(require.main.filename, '..', 'config.js');
const config = require(configPath);

export const ConfigProvider = {
    provide: 'config',
    useValue: config
};