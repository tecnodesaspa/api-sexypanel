import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('prizepvp')
export class PrizePvp {
    @PrimaryGeneratedColumn('increment')
    prizepvp_id: number;

    @Column()
    item_id: number;
    
    @Column()
    quantity: number;
    
    @Column()
    morethan: number;
    
    @Column()
    lessthan: number;
    
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