/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreateGeneroDto {
  @IsNotEmpty()
  nome: string;

  //@IsNotEmpty()
  filmes: number[];

}
