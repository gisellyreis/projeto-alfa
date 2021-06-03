import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Timestamp,
} from "typeorm";

export enum user_types {
  candidate,
  company,
  professor,
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  type: user_types;

  @Column({ unique: true })
  primary_email: string; // email ufba (professor ou aluno) ou email normal (empresa)

  @Column({ type: "varchar", nullable: false })
  password_hash: string;

  @Column()
  legal_name: string; // nome completo ou razao social

  @Column()
  alternative_name: string;

  @Column()
  employee_name: string;

  @Column()
  registration_number: string; 
  // apenas para candidato, não único pois pode ser nulo para outros tipos de user

  @Column()
  legal_id: string; 
  // cpf ou cnpj. TODO: ativar validação {unique:true}

  @Column()
  address: string; // primeira linha do endereço (ex: rua + numero + complemento)

  @Column()
  area: string; // area (bairro)

  @Column()
  city: string; //

  @Column()
  state: string; // pode ser string vazia ou uma sigla de estado (maiúscula)

  @Column()
  CEP: string;

  @Column()
  mobile_phone: string;

  @CreateDateColumn()
  created_at: Timestamp;

  @UpdateDateColumn()
  updated_at: Timestamp;
}
