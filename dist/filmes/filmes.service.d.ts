import { Filme, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
export declare class FilmesService {
    private readonly prisma;
    filme: any;
    constructor(prisma: PrismaService);
    getAll(): Promise<Filme[]>;
    createFilme(filme: CreateFilmeDto): Promise<Filme & {
        genero: import(".prisma/client").Genero[];
    }>;
    deleteOneFilme(where: Prisma.FilmeWhereUniqueInput): Promise<Filme>;
    deletAllFilmes(): Promise<Prisma.BatchPayload>;
    updateOneFilme(id: number, filme: UpdateFilmeDto): Promise<Filme>;
    getOneFilme(filmeId: number): Promise<Filme>;
}
