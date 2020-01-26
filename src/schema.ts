import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import path from 'path';
