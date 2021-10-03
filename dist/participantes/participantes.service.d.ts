import { PrismaService } from 'src/prisma/prisma.service';
import { Participante, Prisma } from '.prisma/client';
export declare class ParticipantesService {
    private prisma;
    constructor(prisma: PrismaService);
    createParticipante(data: Prisma.ParticipanteCreateInput): Promise<Participante>;
    getAll(): Promise<Participante[]>;
    deleteOneParticipante(where: Prisma.ParticipanteWhereUniqueInput): Promise<Participante>;
    deletAllParticipantes(): Promise<Prisma.BatchPayload>;
    updateOneParticipante(participanteId: number, data: Prisma.ParticipanteCreateInput): Promise<Participante>;
    getOneParticipante(participanteId: number): Promise<Participante>;
}
