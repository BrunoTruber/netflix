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
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { GeneroService } from './genero.service';
import { Genero } from '.prisma/client';

@Controller('genero')
export class GeneroController {
  constructor(private generoService: GeneroService) {}

  @Get('/list')
  @UsePipes(ValidationPipe)
  async findMany(): Promise<Genero[]> {
    return this.generoService.getAll();
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createGenero: CreateGeneroDto): Promise<Genero> {
    return this.generoService.createGenero(createGenero);
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.generoService.deleteOneGenero({ id: Number(id) });
  }

  @Delete('/delete')
  @UsePipes(ValidationPipe)
  async deleteMany() {
    return this.generoService.deletAllGeneros();
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() updateGenero: UpdateGeneroDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Genero>{
    return this.generoService.updateOneGenero(id, updateGenero);
  }

  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async findUnique(@Param('id', ParseIntPipe) id: number) {
    return this.generoService.getOneGenero(id);
  }
}
