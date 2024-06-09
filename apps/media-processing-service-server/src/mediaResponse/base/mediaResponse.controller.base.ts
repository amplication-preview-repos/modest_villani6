/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { MediaResponseService } from "../mediaResponse.service";
import { MediaResponseCreateInput } from "./MediaResponseCreateInput";
import { MediaResponse } from "./MediaResponse";
import { MediaResponseFindManyArgs } from "./MediaResponseFindManyArgs";
import { MediaResponseWhereUniqueInput } from "./MediaResponseWhereUniqueInput";
import { MediaResponseUpdateInput } from "./MediaResponseUpdateInput";

export class MediaResponseControllerBase {
  constructor(protected readonly service: MediaResponseService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MediaResponse })
  async createMediaResponse(
    @common.Body() data: MediaResponseCreateInput
  ): Promise<MediaResponse> {
    return await this.service.createMediaResponse({
      data: data,
      select: {
        createdAt: true,
        id: true,
        message: true,
        processedData: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [MediaResponse] })
  @ApiNestedQuery(MediaResponseFindManyArgs)
  async mediaResponses(
    @common.Req() request: Request
  ): Promise<MediaResponse[]> {
    const args = plainToClass(MediaResponseFindManyArgs, request.query);
    return this.service.mediaResponses({
      ...args,
      select: {
        createdAt: true,
        id: true,
        message: true,
        processedData: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MediaResponse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async mediaResponse(
    @common.Param() params: MediaResponseWhereUniqueInput
  ): Promise<MediaResponse | null> {
    const result = await this.service.mediaResponse({
      where: params,
      select: {
        createdAt: true,
        id: true,
        message: true,
        processedData: true,
        status: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: MediaResponse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMediaResponse(
    @common.Param() params: MediaResponseWhereUniqueInput,
    @common.Body() data: MediaResponseUpdateInput
  ): Promise<MediaResponse | null> {
    try {
      return await this.service.updateMediaResponse({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          message: true,
          processedData: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: MediaResponse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMediaResponse(
    @common.Param() params: MediaResponseWhereUniqueInput
  ): Promise<MediaResponse | null> {
    try {
      return await this.service.deleteMediaResponse({
        where: params,
        select: {
          createdAt: true,
          id: true,
          message: true,
          processedData: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
