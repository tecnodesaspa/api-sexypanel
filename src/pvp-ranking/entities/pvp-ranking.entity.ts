import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('pvpranking')
export class PvpRanking {
    @PrimaryColumn()
    char_id: number;

    @Column()
    death: number;
    
    @Column()
    kill: number;

    @Column()
    name: string;
}