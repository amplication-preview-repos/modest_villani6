/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MediaRequestWhereInput } from "./MediaRequestWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MediaRequestOrderByInput } from "./MediaRequestOrderByInput";

@ArgsType()
class MediaRequestFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MediaRequestWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MediaRequestWhereInput, { nullable: true })
  @Type(() => MediaRequestWhereInput)
  where?: MediaRequestWhereInput;

  @ApiProperty({
    required: false,
    type: [MediaRequestOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MediaRequestOrderByInput], { nullable: true })
  @Type(() => MediaRequestOrderByInput)
  orderBy?: Array<MediaRequestOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MediaRequestFindManyArgs as MediaRequestFindManyArgs };
