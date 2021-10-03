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
import { UpdateParticipanteDto } from './dto/update-participante.dto';
import { ParticipantesService } from './participantes.service';
import { Participante } from '@prisma/client';

@Controller('participantes')
export class ParticipantesController {
  constructor(private readonly participantesService: ParticipantesService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() participantesService: CreateParticipanteDto): Promise<Participante>{
       return this.participantesService.createParticipante(participantesService);
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
    @Body() updateParticipante: UpdateParticipanteDto,
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
