import {ApiProperty} from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty()
    text: string;

    @ApiProperty({required: false, nullable: true})
    userId: number | null;
}