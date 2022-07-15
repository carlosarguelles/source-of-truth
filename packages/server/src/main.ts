import 'reflect-metadata'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { Context } from './types'
import { buildSchema } from 'type-graphql'
import { resolvers } from './resolvers'
import { prisma } from './db'

async function main() {
  const app = express()

  const schema = await buildSchema({
    resolvers,
    validate: true,
  })

  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res, prisma } as Context),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  })

  await server.start()

  server.applyMiddleware({ app, cors: false })

  const port = process.env.PORT || 4000

  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}/graphql`)
  })
}

main().catch((e) => console.log(e))
