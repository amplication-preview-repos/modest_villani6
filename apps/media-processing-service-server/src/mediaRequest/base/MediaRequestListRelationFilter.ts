/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MediaRequestWhereInput } from "./MediaRequestWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MediaRequestListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MediaRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => MediaRequestWhereInput)
  @IsOptional()
  @Field(() => MediaRequestWhereInput, {
    nullable: true,
  })
  every?: MediaRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => MediaRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => MediaRequestWhereInput)
  @IsOptional()
  @Field(() => MediaRequestWhereInput, {
    nullable: true,
  })
  some?: MediaRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => MediaRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => MediaRequestWhereInput)
  @IsOptional()
  @Field(() => MediaRequestWhereInput, {
    nullable: true,
  })
  none?: MediaRequestWhereInput;
}
export { MediaRequestListRelationFilter as MediaRequestListRelationFilter };
