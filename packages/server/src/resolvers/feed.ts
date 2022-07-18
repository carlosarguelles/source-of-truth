import { Context } from 'src/types'
import { Ctx, Query, Resolver } from 'type-graphql'
import { VerifiedReport } from '@generated/type-graphql'

@Resolver()
export class FeedResolver {
  @Query(() => [VerifiedReport])
  verifiedReports(@Ctx() { prisma }: Context) {
    return prisma.verifiedReport.findMany()
  }
}
