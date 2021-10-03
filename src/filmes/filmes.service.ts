/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Filme, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmeDto} from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@Injectable() //oque esse Injectable esta fazendo?
export class FilmesService {
  filme: any; // de onde veio esse filme e porque?

  // prisma virou PrismaService?
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Filme[]> {
    // o que essa promise esta fazendo? porque Filme tem [] no final?
    return this.prisma.filme.findMany();
  }

  async createFilme(filme: CreateFilmeDto) {
    const generos = filme.generos?.map((genero) => ({
      id: genero,
    }));

    return this.prisma.filme.create({
      data: {
        nome: filme.nome,
        imagem: filme.imagem,
        data_lancamento: filme.data_lancamento,
        tempo_duracao: filme.tempo_duracao,
        genero: {
          connect: generos,
        },
      },
      include: {
        genero: true,
      }
    });
  }

  // data virou Prisma.FilmeCreateInput? de onde veio FilmeCreateInput?
  // async createFilme(data: Prisma.FilmeCreateInput): Promise<Filme> {
  //   return this.prisma.filme.create({ data });
  // }

  async deleteOneFilme(where: Prisma.FilmeWhereUniqueInput): Promise<Filme> {
    return this.prisma.filme.delete({ where });
  }

  async deletAllFilmes() {
    return this.prisma.filme.deleteMany();
  }

  async updateOneFilme(id: number, filme: UpdateFilmeDto ): Promise<Filme> {
    return await this.prisma.filme.update({
      data: {
        ...filme,
        id: undefined,
      },
      where: {
        id,
      }
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
