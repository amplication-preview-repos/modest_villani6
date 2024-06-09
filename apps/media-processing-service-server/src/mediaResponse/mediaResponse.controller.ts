import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MediaResponseService } from "./mediaResponse.service";
import { MediaResponseControllerBase } from "./base/mediaResponse.controller.base";

@swagger.ApiTags("mediaResponses")
@common.Controller("mediaResponses")
export class MediaResponseController extends MediaResponseControllerBase {
  constructor(protected readonly service: MediaResponseService) {
    super(service);
  }
}
