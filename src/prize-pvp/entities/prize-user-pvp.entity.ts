import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('prizeuserpvp')
export class PrizeUserPvp {
    @PrimaryGeneratedColumn('increment')
    prizeuserpvp_id: number;

    @Column()
    char_id: number;
    
    @Column()
    is_reclamed: boolean;
    
    @Column()
    reclamed_date: Date;
    
    @Column()
    ranking: number;

    @Column()
    item_id: number;

    @Column()
    quantity: number;

    @Column()
    ranking_date: Date;
    
    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    created_at: Date;
    
    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    })
    updated_at: Date;
}