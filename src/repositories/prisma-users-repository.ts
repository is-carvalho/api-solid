import { prisma } from "@/libs/prisma";
import { Prisma } from "generated/prisma/client";

export class PrismaUserRepository {
  async create(data: Prisma.UserCreateInput) {
    const user = prisma.user.create({
      data,
    });

    return user;
  }
}
