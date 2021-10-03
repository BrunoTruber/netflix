import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateFilmeDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  imagem: string;

  @IsNotEmpty()
  data_lancamento: number;

  @IsNotEmpty()
  tempo_duracao: number;

  @IsOptional()
  genero: number[];

  @IsOptional()
  participantes: number[];
}
