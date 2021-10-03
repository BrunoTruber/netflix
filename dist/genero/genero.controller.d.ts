import { CreateGeneroDto } from './dto/create-genero.dto';
import { GeneroService } from './genero.service';
import { Genero } from '.prisma/client';
export declare class GeneroController {
    private generoService;
    constructor(generoService: GeneroService);
    findMany(): Promise<Genero[]>;
    create(createGenero: CreateGeneroDto): Promise<Genero>;
    delete(id: string): Promise<Genero>;
    deleteMany(): Promise<import(".prisma/client").Prisma.BatchPayload>;
    update(updateGenero: CreateGeneroDto, id: number): Promise<Genero>;
    findUnique(id: number): Promise<Genero>;
}
