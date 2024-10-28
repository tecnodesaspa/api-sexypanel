import { Item } from "src/item/entities/item.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('prizeconnection')
export class PrizeConnection {
    @PrimaryGeneratedColumn('increment')
    prizeconnection_id: number;

    @ManyToOne((type) => Item, (i) => i.id)
    @JoinColumn({ name: 'item_id' })
    item_id: number;

    @Column()
    quantity: number;

    @Column()
    day: number;

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