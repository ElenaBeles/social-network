import {IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {ParseIntPipe} from "@nestjs/common";

export class CreateProfileDto {
    @IsString()
    @ApiProperty()
    age: number;

    @IsString()
    @ApiProperty()
    university: string;

    @ApiProperty({ required: false, nullable: true })
    userId: number | null;
}
