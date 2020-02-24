import { Resolvers } from '../../../types/resolvers';
import privateResolver from '../../../utils/privateResolver';
import User from '../../../entities/User';
import { GetNearByDriversResponse } from '../../../types/graph';
import { Between } from 'typeorm';
const resolvers: Resolvers = {
  Query: {
    GetNearByDrivers: privateResolver(
      async (_, __, { req }): Promise<GetNearByDriversResponse> => {
        const user: User = req.user;
        const { lastLat, lastLng } = user;
        const drivers = await User.find({
          isDriving: true,
          lastLat: Between
        });
      }
    )
  }
};

export default resolvers;
