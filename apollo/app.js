import {
    ApolloServer
} from 'apollo-server'
import {
    importSchema
} from 'graphql-import'
import {
    prisma
} from '../prisma/generated/prisma-client'
import {
    resolvers
} from './resolvers/index'

const typeDefs = importSchema('schema.graphql')
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: (req) => {
        return {
            ...req,
            prisma
        }
    }
})

server
    .listen({
        port: process.env.PORT || 4000
    })
    .then(({
        url
    }) => console.log(`Running on ${url}`));