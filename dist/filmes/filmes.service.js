"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FilmesService = class FilmesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        return this.prisma.filme.findMany();
    }
    async createFilme(filme) {
        var _a;
        const generos = (_a = filme.genero) === null || _a === void 0 ? void 0 : _a.map((genero) => ({
            id: genero,
        }));
        const participantes = filme.participantes.map((participante) => ({
            id: participante,
        }));
        return this.prisma.filme.create({
            data: {
                nome: filme.nome,
                imagem: filme.imagem,
                data_lancamento: filme.data_lancamento,
                tempo_duracao: filme.tempo_duracao,
                genero: {
                    connect: generos,
                },
                participantes: {
                    connect: participantes,
                }
            },
            include: {
                genero: true,
                participantes: true,
            }
        });
    }
    async deleteOneFilme(where) {
        return this.prisma.filme.delete({ where });
    }
    async deletAllFilmes() {
        return this.prisma.filme.deleteMany();
    }
    async updateOneFilme(id, filme) {
        return await this.prisma.filme.update({
            data: Object.assign(Object.assign({}, filme), { id: undefined }),
            where: {
                id,
            }
        });
    }
    async getOneFilme(filmeId) {
        return this.prisma.filme.findUnique({
            where: {
                id: filmeId,
            },
        });
    }
};
FilmesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FilmesService);
exports.FilmesService = FilmesService;
//# sourceMappingURL=filmes.service.js.map