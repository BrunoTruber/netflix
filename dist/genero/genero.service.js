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
exports.GeneroService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let GeneroService = class GeneroService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        return this.prisma.genero.findMany();
    }
    async createGenero(genero) {
        return this.prisma.genero.create({
            data: genero
        });
    }
    async deleteOneGenero(where) {
        return this.prisma.genero.delete({ where });
    }
    async deletAllGeneros() {
        return this.prisma.genero.deleteMany();
    }
    async updateOneGenero(id, genero) {
        return this.prisma.genero.update({
            data: Object.assign(Object.assign({}, genero), { id: undefined }),
            where: {
                id,
            },
        });
    }
    async getOneGenero(generoId) {
        return this.prisma.genero.findUnique({
            where: {
                id: generoId,
            },
        });
    }
};
GeneroService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GeneroService);
exports.GeneroService = GeneroService;
//# sourceMappingURL=genero.service.js.map