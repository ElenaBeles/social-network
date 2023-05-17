import {User} from "@prisma/client";
import {ApiProperty} from "@nestjs/swagger";

export class UserEntity implements User {
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

    password: string;
}