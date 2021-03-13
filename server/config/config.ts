
interface IConfigKey {
  database: string;
  username: string;
  password: string;
  host: string;
  dialect: string;
  logging: boolean;
}

interface IConfig {
  development: IConfigKey;
  test: IConfigKey;
  production: IConfigKey;
}

const isTest: boolean = process.env.NODE_ENV === 'test';

const loadConfig: IConfig = {
  development: {
    database: isTest ? process.env.DB_NAME_TEST : process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: true,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  },
};

module.exports = loadConfig;
