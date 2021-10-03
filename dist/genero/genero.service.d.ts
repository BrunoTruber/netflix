import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Genero } from '.prisma/client';
export declare class GeneroService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<Genero[]>;
    createGenero(data: Prisma.GeneroCreateInput): Promise<Genero>;
    deleteOneGenero(where: Prisma.GeneroWhereUniqueInput): Promise<Genero>;
    deletAllGeneros(): Promise<Prisma.BatchPayload>;
    updateOneGenero(generoId: number, data: Prisma.GeneroCreateInput): Promise<Genero>;
    getOneGenero(generoId: number): Promise<Genero>;
}
