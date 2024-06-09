import { Module } from "@nestjs/common";
import { MediaRequestModuleBase } from "./base/mediaRequest.module.base";
import { MediaRequestService } from "./mediaRequest.service";
import { MediaRequestController } from "./mediaRequest.controller";
import { MediaRequestResolver } from "./mediaRequest.resolver";

@Module({
  imports: [MediaRequestModuleBase],
  controllers: [MediaRequestController],
  providers: [MediaRequestService, MediaRequestResolver],
  exports: [MediaRequestService],
})
export class MediaRequestModule {}
