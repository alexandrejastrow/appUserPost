import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm"
import { v4 as uuid } from "uuid"
import User from "./User"


@Entity('posts')
class Post {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column()
    content: string

    @Column()
    user_id: string

    @ManyToOne(() => User)
    @JoinColumn({ name: "id" })
    users: User

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

export default Post