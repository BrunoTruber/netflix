/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class UpdateFilmeDto {
  @IsNumber()
  id: number;

  @IsNotEmpty()
  nome: string;

  @IsOptional()
  imagem: string;

  @IsNotEmpty()
  data_lancamento: string;

  @IsNotEmpty()
  tempo_duracao: number;
}
