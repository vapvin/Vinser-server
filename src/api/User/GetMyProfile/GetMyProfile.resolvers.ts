import { Resolvers } from "src/types/resolvers";
import preivateResolver from "src/utils/privateResolver";

const resolvers: Resolvers = {
  Query: {
    GetMyProfile: preivateResolver(async (_, __, { req }) => {
      const { user } = req;
      return {
        ok: true,
        error: null,
        user
      };
    })
  }
};

export default resolvers;
