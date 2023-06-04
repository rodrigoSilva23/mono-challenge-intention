import { Injectable } from '@nestjs/common';
import { CreateIntentionDto } from '../dto/create-intention.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IntentionRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateIntentionDto) {
    const { name, intentionProduct, address } = data;
    try {
      return await this.prisma.user.create({
        data: {
          name,
          address: {
            create: address,
          },
          intentionProduct: {
            createMany: {
              data: intentionProduct,
            },
          },
        },
        include: {
          intentionProduct: true,
          address: true,
        },
      });
    } catch (error) {
      console.error('Error', error);
      return error;
    }
  }

  async findAll() {
    return await this.prisma.user.findMany({
      include: {
        address: true,
        intentionProduct: true,
      },
      orderBy: { id: 'desc' },
    });
  }
  async paginate(
    page: number,
    size: number,
    sort: string,
    order: string,
    search: string,
  ) {
    const results = await this.prisma.user.findMany({
      skip: page * size,
      take: Number(size),
      include: {
        address: true,
        intentionProduct: true,
      },
      where: { name: { contains: search } },
      orderBy: { [sort]: order },
    });

    const totalItems = await this.prisma.user.count({
      where: { name: { contains: search, mode: 'insensitive' } },
    });

    return { results, totalItems };
  }
  async findOne(id: number) {
    return await this.prisma.user.findUnique({
      where: { id },
      include: {
        address: true,
        intentionProduct: true,
      },
    });
  }
}
