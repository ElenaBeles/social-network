import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false})
    description: string
}

