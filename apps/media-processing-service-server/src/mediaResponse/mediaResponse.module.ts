import { Module } from "@nestjs/common";
import { MediaResponseModuleBase } from "./base/mediaResponse.module.base";
import { MediaResponseService } from "./mediaResponse.service";
import { MediaResponseController } from "./mediaResponse.controller";
import { MediaResponseResolver } from "./mediaResponse.resolver";

@Module({
  imports: [MediaResponseModuleBase],
  controllers: [MediaResponseController],
  providers: [MediaResponseService, MediaResponseResolver],
  exports: [MediaResponseService],
})
export class MediaResponseModule {}
