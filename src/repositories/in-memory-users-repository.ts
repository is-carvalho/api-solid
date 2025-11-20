import { Prisma } from "generated/prisma/client";

export class InMemoryUserRepository {
  public users: any[] = [];
  async create(data: Prisma.UserCreateInput) {
    const user = this.users.push({
      data,
    });

    return user;
  }
}
