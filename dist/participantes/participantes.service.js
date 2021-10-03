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
exports.ParticipantesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ParticipantesService = class ParticipantesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createParticipante(participante) {
        return this.prisma.participante.create({
            data: participante,
        });
    }
    async getAll() {
        return this.prisma.participante.findMany();
    }
    async deleteOneParticipante(where) {
        return this.prisma.participante.delete({ where });
    }
    async deletAllParticipantes() {
        return this.prisma.participante.deleteMany();
    }
    async updateOneParticipante(id, participante) {
        return await this.prisma.participante.update({
            data: Object.assign(Object.assign({}, participante), { id: undefined }),
            where: {
                id,
            },
        });
    }
    async getOneParticipante(participanteId) {
        return this.prisma.participante.findUnique({
            where: {
                id: participanteId,
            },
        });
    }
};
ParticipantesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ParticipantesService);
exports.ParticipantesService = ParticipantesService;
//# sourceMappingURL=participantes.service.js.map