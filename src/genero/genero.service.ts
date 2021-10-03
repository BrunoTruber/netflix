/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Genero } from '.prisma/client';

@Injectable()
export class GeneroService {
  //genero: any;
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Genero[]> {
    return this.prisma.genero.findMany();
  }

  async createGenero(data: Prisma.GeneroCreateInput): Promise<Genero> {
    return this.prisma.genero.create({ data });
  }

  async deleteOneGenero(where: Prisma.GeneroWhereUniqueInput): Promise<Genero> {
    return this.prisma.genero.delete({ where });
  }

  async deletAllGeneros() {
    return this.prisma.genero.deleteMany();
  }

  async updateOneGenero(
    generoId: number,
    data: Prisma.GeneroCreateInput,
  ): Promise<Genero> {
    return this.prisma.genero.update({
      data,
      where: {
        id: generoId,
      },
    });
  }
  async getOneGenero(generoId: number): Promise<Genero> {
    return this.prisma.genero.findUnique({
      where: {
        id: generoId,
      },
    });
  }
}
