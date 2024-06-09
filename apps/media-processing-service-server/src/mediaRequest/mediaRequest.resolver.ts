import * as graphql from "@nestjs/graphql";
import { MediaRequestResolverBase } from "./base/mediaRequest.resolver.base";
import { MediaRequest } from "./base/MediaRequest";
import { MediaRequestService } from "./mediaRequest.service";

@graphql.Resolver(() => MediaRequest)
export class MediaRequestResolver extends MediaRequestResolverBase {
  constructor(protected readonly service: MediaRequestService) {
    super(service);
  }
}
