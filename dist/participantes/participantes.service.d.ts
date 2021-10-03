import { PrismaService } from 'src/prisma/prisma.service';
import { Participante, Prisma } from '.prisma/client';
import { CreateParticipanteDto } from './dto/create-participantes.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';
export declare class ParticipantesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createParticipante(participante: CreateParticipanteDto): Promise<Participante>;
    getAll(): Promise<Participante[]>;
    deleteOneParticipante(where: Prisma.ParticipanteWhereUniqueInput): Promise<Participante>;
    deletAllParticipantes(): Promise<Prisma.BatchPayload>;
    updateOneParticipante(id: number, participante: UpdateParticipanteDto): Promise<Participante>;
    getOneParticipante(participanteId: number): Promise<Participante>;
}
