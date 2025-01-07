import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id;

    @Column({ unique: true })
    username;

    @Column()
    firstName;

    @Column()
    lastName;

    @Column({ default: false })
    isRegistered;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt;

    @Column({ type: 'timestamp', nullable: true })
    updatedAt;
}