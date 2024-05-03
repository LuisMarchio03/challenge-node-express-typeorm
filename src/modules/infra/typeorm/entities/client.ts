import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Client extends BaseEntity {
    @PrimaryGeneratedColumn()
    TECL_ID: number;
  
    @Column("varchar")
    TECL_NOME: string;
  
    @Column("varchar")
    TECL_ENDERECO: string;
  
    @Column("varchar")
    TECL_CIDADE: string;
  
    @Column("varchar")
    TECL_UF: string;
  
    @Column("varchar")
    TECL_TELEFONE: string;
  
    @CreateDateColumn()
    CREATED_AT: Date;

    @UpdateDateColumn()
    UPDATE_AT: Date;
  }
    