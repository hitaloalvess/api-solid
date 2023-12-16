import { CheckIn, Prisma } from '@prisma/client'

export interface ICheckInsRepository {
  findByUserIdOnDate(userId: string, date: Date): Promise<CheckIn | null>
  findManyByUserId(userId: string, page: number): Promise<CheckIn[]>
  countByUserId(userId: string): Promise<number>
  create(user: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>
}
