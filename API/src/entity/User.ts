// crie aqui a tabela user no mesmo estilo da tabela tasks

enum user_types {
  candidate,
  company,
  professor 
}

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,Timestamp
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  type: user_types;

  @Column()
  primary_email: string; // email ufba (professor ou aluno) ou email normal (empresa)

  @Column()
  secondary_email: string; // email alternativo

  @Column({type: 'varchar', nullable: false})
  password_hash: string;

  @Column()
  legal_name: string; // nome completo ou razao social

  @Column()
  alternative_name: string;

  @Column()
  employee_name: string;

  @Column()
  registration_number: string; // apenas para user

  @Column()
  legal_id: string; // cpf ou cnpj

  @Column()
  address: string; // primeira linha do endereço (ex: rua + numero + complemento)

  @Column()
  area: string; // area

  @Column()
  city: string; // 
  
  @Column()
  state: string; // usar um object com todas as siglas e nomes extensos para validar, tipo {"BA":"Bahia"}

  @Column()
  CEP: string;
  
  @Column()
  mobile_phone: string;

  @CreateDateColumn()
  created_at: Timestamp;

  @UpdateDateColumn()
  updated_at: Timestamp;
}
