/* eslint-disable prettier/prettier */
import { IsDate, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateParticipanteDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  imagem: string;

  @IsNotEmpty()
  @IsDate()
  data_nascimento: Date;

  @IsNotEmpty()
  staff: string;

  @IsOptional()
  filmes: number[];
}
