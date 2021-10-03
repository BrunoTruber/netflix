/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Filme, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable() //oque esse Injectable esta fazendo?
export class FilmesService {
  filme: any; // de onde veio esse filme e porque?

  // prisma virou PrismaService?
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Filme[]> {
    // o que essa promise esta fazendo? porque Filme tem [] no final?
    return this.prisma.filme.findMany();
  }

  // data virou Prisma.FilmeCreateInput? de onde veio FilmeCreateInput?
  async createFilme(data: Prisma.FilmeCreateInput): Promise<Filme> {
    return this.prisma.filme.create({ data });
  }

  async deleteOneFilme(where: Prisma.FilmeWhereUniqueInput): Promise<Filme> {
    return this.prisma.filme.delete({ where });
  }

  async deletAllFilmes() {
    return this.prisma.filme.deleteMany();
  }

  async updateOneFilme(
    filmeId: number,
    data: Prisma.FilmeCreateInput,
  ): Promise<Filme> {
    return this.prisma.filme.update({
      data,
      where: {
        id: filmeId,
      },
    });
  }
  async getOneFilme(filmeId: number): Promise<Filme> {
    return this.prisma.filme.findUnique({
      where: {
        id: filmeId,
      },
    });
  }
}
