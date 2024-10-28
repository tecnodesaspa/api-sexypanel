import { Column, Entity } from "typeorm";

@Entity('connectionuser')
export class ConnectionUser {
    @Column({primary: true})
    connectionuser_id: number;
    
    @Column()
    email: string;
    
    @Column()
    connection_date: Date; 
    
    @Column()
    day: number;
}