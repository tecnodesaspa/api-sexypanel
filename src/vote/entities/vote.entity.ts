import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vote {
    @PrimaryGeneratedColumn('increment')
    vote_id: number;

    @Column()
    email: string;
    
    @Column()
    ip: string;
    
    @Column()
    rank: number;
    
    @Column()
    is_reclamed: boolean;
    
    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    created_at: Date;
}