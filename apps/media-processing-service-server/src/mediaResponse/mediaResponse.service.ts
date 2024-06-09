import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MediaResponseServiceBase } from "./base/mediaResponse.service.base";

@Injectable()
export class MediaResponseService extends MediaResponseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
