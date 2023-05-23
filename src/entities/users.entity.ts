import { hashSync } from "bcryptjs";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BeforeInsert,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Customer } from "./customers.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 30 })
  name: string;

  @Column({ length: 35, unique: true })
  email: string;

  @Column({ length: 250 })
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @BeforeInsert()
  hashPassword(): void {
    this.password = hashSync(this.password, 10);
  }

  @OneToMany(() => Customer, (customer) => customer.user)
  @JoinColumn()
  customers: Customer[];
}
