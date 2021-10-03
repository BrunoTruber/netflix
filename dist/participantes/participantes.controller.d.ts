import { CreateParticipanteDto } from './dto/create-participantes.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';
import { ParticipantesService } from './participantes.service';
import { Participante } from '@prisma/client';
export declare class ParticipantesController {
    private readonly participantesService;
    constructor(participantesService: ParticipantesService);
    create(participantesService: CreateParticipanteDto): Promise<Participante>;
    findMany(): Promise<Participante[]>;
    delete(id: string): Promise<Participante>;
    deleteMany(): Promise<import(".prisma/client").Prisma.BatchPayload>;
    update(updateParticipante: UpdateParticipanteDto, id: number): Promise<Participante>;
    findUnique(id: number): Promise<Participante>;
}
