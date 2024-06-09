import * as graphql from "@nestjs/graphql";
import { MediaResponseResolverBase } from "./base/mediaResponse.resolver.base";
import { MediaResponse } from "./base/MediaResponse";
import { MediaResponseService } from "./mediaResponse.service";

@graphql.Resolver(() => MediaResponse)
export class MediaResponseResolver extends MediaResponseResolverBase {
  constructor(protected readonly service: MediaResponseService) {
    super(service);
  }
}
