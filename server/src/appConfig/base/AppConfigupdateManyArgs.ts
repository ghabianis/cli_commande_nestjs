/*
//------------------------------------------------------------------------------ 
// This code was generated by Amplication. 
// 
// Changes to this file will be lost if the code is regenerated. 
//
// There are other ways to to customize your code, see this doc to learn more
// https://docs.amplication.com/docs/how-to/custom-code
//
//------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AppConfigWhereInput } from "./AppConfigWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class AppConfigupdateManyArgs {
  @ApiProperty({
    required: false,
    type: () => AppConfigWhereInput,
  })
  @Field(() => AppConfigWhereInput, { nullable: true })
  @Type(() => AppConfigWhereInput)
  where?: AppConfigWhereInput;
}

export { AppConfigupdateManyArgs };