import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Customer } from "./customers.entity";
enum ContatcEnum {
  phone = "phone",
  email = "email",
}

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "enum", enum: ContatcEnum })
  type: ContatcEnum;

  @Column({ length: 32 })
  contact: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @ManyToOne(() => Customer, { onDelete: "CASCADE" })
  @JoinColumn()
  customer: Customer;
}
