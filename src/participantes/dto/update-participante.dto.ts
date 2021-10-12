/* eslint-disable prettier/prettier */
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateParticipanteDto {

  @IsNumber()
  id: number;

  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  imagem: string;

  @IsNotEmpty()
  @IsDate()
  data_nascimento: Date;

  @IsNotEmpty()
  staff: string;
}