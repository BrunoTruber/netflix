/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateParticipanteDto {

  @IsNumber()
  id: number;

  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  imagem: string;

  @IsNotEmpty()
  data_nascimento: string;

  @IsNotEmpty()
  staff: string;
}