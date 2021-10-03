/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Genero } from '.prisma/client';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Injectable()
export class GeneroService {
  //genero: any;
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Genero[]> {
    return this.prisma.genero.findMany();
  }


  async createGenero(genero: CreateGeneroDto) {
    return this.prisma.genero.create({ 
      data: genero
    });
  }

  async deleteOneGenero(where: Prisma.GeneroWhereUniqueInput): Promise<Genero> {
    return this.prisma.genero.delete({ where });
  }

  async deletAllGeneros() {
    return this.prisma.genero.deleteMany();
  }

  async updateOneGenero(
    id: number,
    genero: UpdateGeneroDto) {
    return this.prisma.genero.update({
      data: {
        ...genero,
        id: undefined,
      },
      where: {
        id,
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
