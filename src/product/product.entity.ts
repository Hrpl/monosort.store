import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  provider_id: number;

  @Column()
  name: string;

  @Column()
  count_in_storage: number;

  @Column()
  last_order: string;

  @Column()
  measure: string;
}