import {ApiProperty} from "@nestjs/swagger";
import {IsOptional} from "class-validator";
import {UserEntity} from "@/users/entities/user.entity";
import {User} from "@prisma/client";

export class ProfileEntity {
    @ApiProperty()
    first_name: number;

    @ApiProperty()
    last_name: number;

    @IsOptional()
    @ApiProperty()
    age: number;

    @IsOptional()
    @ApiProperty()
    university: string;

    @ApiProperty({ required: false, type: UserEntity })
    user?: User;

    constructor({ user, ...data }: Partial<ProfileEntity>) {
        Object.assign(this, data);

        if (user) {
            this.user = new UserEntity(user);
        }
    }
}
