import {User} from "@prisma/client";
import {ApiProperty} from "@nestjs/swagger";
import {Exclude} from "class-transformer";

export class UserEntity implements User {
    @Exclude()
    password: string;

    @ApiProperty()
    id: number;

    @ApiProperty()
    first_name: string;

    @ApiProperty()
    last_name: string;

    @ApiProperty({required: false})
    age: number;

    @ApiProperty({required: false})
    university: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    email: string;

    constructor(partial: Partial<UserEntity>) {
        Object.assign(this, partial);
    }
}