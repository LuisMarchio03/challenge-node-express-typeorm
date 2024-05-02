import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Client extends BaseEntity {
    @PrimaryGeneratedColumn()
    TECL_ID: number;
  
    @Column()
    TECL_NOME: string;
  
    @Column()
    TECL_ENDERECO: string;
  
    @Column()
    TECL_CIDADE: string;
  
    @Column()
    TECL_UF: string;
  
    @Column()
    TECL_TELEFONE: string;
  
    @CreateDateColumn()
    CREATED_AT: Date;

    @UpdateDateColumn()
    UPDATE_AT: Date;
  }
    