import { UserResolver } from './user'
import { resolvers as generated } from '@generated/type-graphql'

const customResolvers = [UserResolver]

export const resolvers = [...generated, ...customResolvers] as const
