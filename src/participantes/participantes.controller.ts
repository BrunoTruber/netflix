/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateParticipanteDto } from './dto/create-participantes.dto';
import { ParticipantesService } from './participantes.service';
import { Participante } from '@prisma/client';

@Controller('participantes')
export class ParticipantesController {
  constructor(private participantesService: ParticipantesService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createParticipante: CreateParticipanteDto): Promise<Participante> {
    // const { nome, filmeId, imagem, data_nascimento, staff, filmes } =
    //   createParticipante;
       return this.participantesService.createParticipante(createParticipante);
      // nome,
      // imagem,
      // data_nascimento,
      // staff,
      // filmes: {
      //   connect: {
      //     id: [2]
      //   },
      // },
    //});
  }

  @Get('/list')
  @UsePipes(ValidationPipe)
  async findMany(): Promise<Participante[]> {
    return this.participantesService.getAll();
  }
  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.participantesService.deleteOneParticipante({ id: Number(id) });
  }

  @Delete('/delete')
  @UsePipes(ValidationPipe)
  async deleteMany() {
    return this.participantesService.deletAllParticipantes(); //
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() updateParticipante: CreateParticipanteDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Participante> {
    return this.participantesService.updateOneParticipante(id, updateParticipante );
  }

  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async findUnique(@Param('id', ParseIntPipe) id: number) {
    return this.participantesService.getOneParticipante(id);
  }
}
