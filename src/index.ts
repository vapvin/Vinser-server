import dotenv from 'dotenv';
dotenv.config();
import { Options } from 'graphql-yoga';
import { createConnection } from 'typeorm';
import app from './app';
import connectionOptions from './ormConfig';

const PORT: number | string = process.env.PORT || 3333;
const PLAYGROUND: string = '/playground';
const GRAPHQL_ENDPOINT: string = '/graphql';

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND,
  endpoint: GRAPHQL_ENDPOINT
};

const handleAppStart = () =>
  console.log(
    `Start Server on Main: http://localhost:${PORT} Playground: http://localhost:${PORT}/playground`
  );

createConnection(connectionOptions)
  .then(() => {
    app.start(appOptions, handleAppStart);
  })
  .catch(error => console.log(error));
