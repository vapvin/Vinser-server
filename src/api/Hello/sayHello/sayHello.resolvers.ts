import { Greeting } from 'src/types/graph';

const resolvers = {
  Query: {
    sayHello: (): Greeting => {
      return {
        error: false,
        text: 'Like TypeScript'
      };
    }
  }
};

export default resolvers;
