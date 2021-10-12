/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional, IsNumber, IsDate } from 'class-validator';

export class UpdateFilmeDto {
  @IsNumber()
  id: number;

  @IsNotEmpty()
  nome: string;

  @IsOptional()
  imagem: string;

  @IsNotEmpty()
  @IsDate()
  data_lancamento: Date;

  @IsNotEmpty()
  tempo_duracao: number;
}
