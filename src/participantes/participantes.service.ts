/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Participante, Prisma } from '.prisma/client';

@Injectable()
export class ParticipantesService {

  constructor(private prisma: PrismaService) {}

  async createParticipante(
    data: Prisma.ParticipanteCreateInput,

  ): Promise<Participante> {
    return this.prisma.participante.create({ data
      // data:{
      // nome,
      // imagem,
      // data_nascimento,
      // staff,
      // filmes: {
      //   connect: {
      //     id: [2]
      //   },
      // },
      // }
    });
  }

  async getAll(): Promise<Participante[]> {
    return this.prisma.participante.findMany();
  }

  async deleteOneParticipante(
    where: Prisma.ParticipanteWhereUniqueInput,
  ): Promise<Participante> {
    return this.prisma.participante.delete({ where });
  }

  async deletAllParticipantes() {
    return this.prisma.participante.deleteMany();
  }

  async updateOneParticipante(
    participanteId: number,
    data: Prisma.ParticipanteCreateInput,
  ): Promise<Participante> {
    return this.prisma.participante.update({
      data,
      where: {
        id: participanteId,
      },
    });
  }
  async getOneParticipante(participanteId: number): Promise<Participante> {
    return this.prisma.participante.findUnique({
      where: {
        id: participanteId,
      },
    });
  }
}
