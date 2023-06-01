import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { User } from "./users.entity";
import { Contact } from "./contacts.entity";

@Entity("customers")
export class Customer {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 30 })
  name: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToMany(() => Contact, (contact) => contact.customer)
  @JoinColumn()
  contacts: Contact[];
}
