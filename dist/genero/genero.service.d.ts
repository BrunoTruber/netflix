import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Genero } from '.prisma/client';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
export declare class GeneroService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<Genero[]>;
    createGenero(genero: CreateGeneroDto): Promise<Genero>;
    deleteOneGenero(where: Prisma.GeneroWhereUniqueInput): Promise<Genero>;
    deletAllGeneros(): Promise<Prisma.BatchPayload>;
    updateOneGenero(id: number, genero: UpdateGeneroDto): Promise<Genero>;
    getOneGenero(generoId: number): Promise<Genero>;
}
