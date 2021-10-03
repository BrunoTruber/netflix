/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { FilmesService } from './filmes.service';
import { Filme } from '.prisma/client';

@Controller('filmes')
export class FilmesController {
  // filmesService virou FilmesService?
  constructor(private filmesService: FilmesService) {}

  @Get('/list') //o que o método index esta fazendo? oque a promise esta fazendo?
  @UsePipes(ValidationPipe)
  async findMany(): Promise<Filme[]> {
    // esse ':' faz o que?
    return this.filmesService.getAll();
  }

  @Post('/create') // createFilme virou CreateFilmeDto? oque é esse @Body()?
  @UsePipes(ValidationPipe)
  //Oque o @Body() esta fazendo? createFilme é do tipo CreateFilmeDto / Promise<Filme> tras um filme
  async create(@Body() createFilme: CreateFilmeDto): Promise<Filme> {
    //oque essa promise esta fazendo?
    return this.filmesService.createFilme(createFilme);
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.filmesService.deleteOneFilme({ id: Number(id) });
  }

  @Delete('/delete')
  @UsePipes(ValidationPipe)
  async deleteMany() {
    return this.filmesService.deletAllFilmes();
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() updateFilme: CreateFilmeDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Filme> {
    return this.filmesService.updateOneFilme(id, updateFilme);
  }

  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async findUnique(@Param('id', ParseIntPipe) id: number) {
    return this.filmesService.getOneFilme(id);
  }
}
