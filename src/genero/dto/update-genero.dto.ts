/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateGeneroDto {
  @IsNumber()
  id: number;

  @IsNotEmpty()
  nome: string;

}