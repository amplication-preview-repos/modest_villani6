import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MediaRequestServiceBase } from "./base/mediaRequest.service.base";

@Injectable()
export class MediaRequestService extends MediaRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
