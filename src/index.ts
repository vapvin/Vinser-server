import { Options } from 'graphql-yoga';
import app from './app';

const PORT: number | string = process.env.PORT || 3333;
const PLAYGROUND: string = '/playground';
const GRAPHQL_ENDPOINT: string = '/graphql';

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND,
  endpoint: GRAPHQL_ENDPOINT
};

const handleAppStart = () => console.log(`Start Server on localhost:${PORT}`);

app.start(appOptions, handleAppStart);
