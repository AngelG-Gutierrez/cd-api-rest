import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(user: any): Promise<any | null> {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    return this.prisma.user.create({
      data: user
    });
  }

  async findOne(username: string): Promise<any | null> {
    return this.prisma.user.findFirst({
      where: {
        username,
      },
    });
  }
}