import { Prisma, User } from '@prisma/client'
import { IUsersRepository } from '../interfaces/users-repository-interface'

export class InMemoryUsersRepository implements IUsersRepository {
  public users: User[] = []
  async create(data: Prisma.UserCreateInput) {
    const user = {
      id: `user-${this.users.length + 1}`,
      ...data,
      created_at: new Date(),
    }

    this.users.push(user)

    return user
  }

  async findByEmail(email: string) {
    const user = this.users.find((user) => user.email === email)

    if (!user) return null

    return user
  }
}
