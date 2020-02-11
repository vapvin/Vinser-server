import cors from 'cors';
import { GraphQLServer } from 'graphql-yoga';
import helmet from 'helmet';
import loger from 'morgan';
import schema from './schema';

class App {
  public app: GraphQLServer;
  constructor() {
    this.app = new GraphQLServer({
      schema
    });
    this.middlewares();
  }
  private middlewares = (): void => {
    this.app.express.use(cors());
    this.app.express.use(loger('dev'));
    this.app.express.use(helmet());
  };

  private jwt = async (req, res, next): Promise<void> => {
    const token = req.get('X-JWT');
  };
}

export default new App().app;
