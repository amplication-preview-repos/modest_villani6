import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MediaRequestService } from "./mediaRequest.service";
import { MediaRequestControllerBase } from "./base/mediaRequest.controller.base";

@swagger.ApiTags("mediaRequests")
@common.Controller("mediaRequests")
export class MediaRequestController extends MediaRequestControllerBase {
  constructor(protected readonly service: MediaRequestService) {
    super(service);
  }
}
