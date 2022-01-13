import {
    Entity,
    PrimaryGeneratedColumn,
    Column, BeforeInsert,
    BeforeUpdate,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
} from 'typeorm'

import bcrypt from 'bcryptjs'


export interface UserRequest {
    id: string
    username?: string,
    email?: string,
    avathar_url?: string
    password?: string,
    created_at?: Date
    updated_at?: Date
}

import { v4 as uuid } from 'uuid'
import Post from './Post'
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

    @OneToMany(() => Post, post => post.user_id)
    posts: Post[]


    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password)
    }

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

export default User