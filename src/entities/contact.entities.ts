import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./client.entities";

@Entity("clients")
export class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 255 })
  fullName: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "varchar", length: 16 })
  telphone: string;

  @CreateDateColumn({ type: "date" })
  createdAt: Date | string;

  @ManyToOne(() => Client, (client) => client.contacts)
  client: Client;
}
