import { prisma } from "@/libs/prisma";
import { PrismaUserRepository } from "@/repositories/prisma-users-repository";
import { hash } from "bcryptjs";

interface RegisterUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

export class RegisterUserCase {
  constructor(private usersRepository: any) {}

  async execute({ name, email, password }: RegisterUseCaseRequest) {
    const password_hash = await hash(password, 6);

    const userWithSameEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userWithSameEmail) {
      throw new Error("E-mail alredy exists.");
    }

    await this.usersRepository.create({ name, email, password_hash });
  }
}
