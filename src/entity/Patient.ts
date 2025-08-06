import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  crId!: string;

  @Column()
  nationalId!: string;

  @Column()
  shaNumber!: string;

  @Column()
  householdNumber!: string;
  
  @Column()
  walletId!: string;

  @Column()
  family!: string;

  @Column()
  given!: string;

  @Column()
  birthDate!: Date;

  @Column()
  gender!: string;

  @Column()
  phoneNumber!: string;

  @Column()
  county!: string;

  @Column()
  subCounty!: string;
  
  @Column()
  ward!: string;

  @Column()
  village!: string;
  
  @Column()
  uuid!: string;

  @Column()
  otp!: string;

  @Column()
  createdAt?: Date;
}