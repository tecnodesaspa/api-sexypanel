import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('lock')
export class Lock {
  @PrimaryGeneratedColumn('increment')
  lock_id: number;

  @Column()
  account_id: number; // account_id para relacion entre tablas

  @Column()
  is_bg_lock: boolean; // bloqueo de bg

  @Column()
  count_bg_locks: number;

  @Column()
  start_date_bg_lock: Date; // desde

  @Column()
  end_date_bg_lock: Date; // hasta, null = para siempre

  @Column()
  is_woe_lock: boolean; // bloqueo de mapas de woe

  @Column()
  count_woe_locks: number;

  @Column()
  start_date_woe_lock: Date; // desde

  @Column()
  end_date_woe_lock: Date; // hasta, null = para siempre

  @Column()
  is_ban: boolean; // baneo

  @Column()
  count_ban: number;

  @Column()
  start_date_ban: Date; // desde

  @Column()
  end_date_ban: Date; // hasta, null = para siempre

  @Column()
  admin: string; // que admin realiza ultima operación

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date; // fecha registro

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date; // fecha última actualización
}
