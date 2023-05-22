import { hashSync } from "bcryptjs";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BeforeInsert,
} from "typeorm";

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
}
