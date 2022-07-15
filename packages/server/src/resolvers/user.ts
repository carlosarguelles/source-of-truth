import { User } from '@generated/type-graphql'
import { Context } from 'src/types'
import { Ctx, Query, Resolver } from 'type-graphql'

@Resolver()
export class UserResolver {
  @Query(() => [User])
  myUser(@Ctx() { prisma }: Context) {
    return prisma.user.findMany()
  }
}
