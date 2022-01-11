import {
    Entity,
    PrimaryGeneratedColumn,
    Column, BeforeInsert,
    BeforeUpdate,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm'

import bcrypt from 'bcryptjs'


export interface TypeUser {
    id: string,
    username: string,
    email: string,
    avathar_url: string
    password?: string,
    token?: string,
    created_at: Date,
    updated_at: Date
}

@Entity('users')
class User {


    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    username: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    avathar_url: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password)
    }

}

export default User