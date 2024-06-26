// Standard Packages
import { Injectable } from '@nestjs/common';

// Third-party Packages
import { $Enums, User } from '@prisma/client';

// Custom Packages
import { PrismaService } from '@app/prisma/prisma.service';
import { UserV1SigninDto, UserV1SignupDto } from '../../dto';
import type { AuthV1Repository } from '../auth.repository';

@Injectable()
export class AuthPrismaRepository implements AuthV1Repository {
  constructor(private readonly prisma: PrismaService) {}

  async userSignup(
    data: UserV1SignupDto,
    type: $Enums.SignupType,
  ): Promise<Pick<User, 'id'>> {
    const newUser = await this.prisma.user.create({
      data: {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        password: data.password,
        sign_up_type: type,
      },
      select: {
        id: true,
      },
    });
    return newUser;
  }
  async userSignin(
    data: UserV1SigninDto,
  ): Promise<Pick<User, 'id' | 'password'>> {
    const findUser = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
      select: {
        id: true,
        password: true,
      },
    });
    return findUser;
  }
}
