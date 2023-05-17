import {Post} from "@prisma/client";
import {ApiProperty} from "@nestjs/swagger";

export class PostEntity implements Post {
    @ApiProperty()
    id: number;

    @ApiProperty()
    text: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty({ required: false, nullable: true })
    authorId: number | null;
}
