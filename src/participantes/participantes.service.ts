/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Participante, Prisma } from '.prisma/client';
import { CreateParticipanteDto } from './dto/create-participantes.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';

@Injectable()
export class ParticipantesService {
  constructor(private readonly prisma: PrismaService) {}

  async createParticipante(participante: CreateParticipanteDto) {
    // const filmes = participante.filmes?.map((filme) => ({
    //   id: filme,
    // }));
    return this.prisma.participante.create({
      data: participante,
    })
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


  async updateOneParticipante(id: number, participante: UpdateParticipanteDto) {
    return await this.prisma.participante.update({
      data: {
       ...participante,
        id: undefined,
      },
      where: {
        id,
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
