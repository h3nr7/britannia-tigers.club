import { IsEmail, IsPhoneNumber, IsString, IsStrongPassword, IsArray, ArrayMinSize } from "class-validator";
import { ApiProperty } from '@nestjs/swagger'
import { UserCreateUpdateRequest } from "./user.interface";


export class UserDto implements Omit<UserCreateUpdateRequest, 'username'> {


  @IsString()
  @ApiProperty()
  readonly name:string;

  @IsEmail()
  @ApiProperty()
  readonly email:string;

  @IsPhoneNumber()
  @ApiProperty()
  readonly phone_number: string;

  @IsStrongPassword()
  @ApiProperty()
  readonly password: string;

}

export class UpdateUserMetaDataDto {

  @IsArray()
  @ArrayMinSize(1)
  @ApiProperty()
  readonly images?: string[];

  @IsArray()
  @ArrayMinSize(1)
  @ApiProperty()
  readonly videos?: string[];

}

