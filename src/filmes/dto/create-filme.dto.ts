import { IsNotEmpty, IsOptional, IsDate } from 'class-validator';

export class CreateFilmeDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  imagem: string;

  @IsNotEmpty()
  @IsDate()
  data_lancamento: Date;

  @IsNotEmpty()
  tempo_duracao: number;

  @IsOptional()
  genero: number[];

  @IsOptional()
  participantes: number[];
}
