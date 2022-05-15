import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: process.env.DATABASE ?? 'db',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: true,
};

export default config;
