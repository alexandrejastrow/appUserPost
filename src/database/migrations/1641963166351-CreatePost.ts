import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePost1641963166351 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        queryRunner.createTable(new Table({
            name: 'posts',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'title',
                    type: 'varchar'
                },
                {
                    name: 'content',
                    type: 'varchar'
                },
                {
                    name: 'user_id',
                    type: 'uuid'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ],
            foreignKeys: [
                {
                    name: "fk_user_posts",
                    columnNames: ["user_id"],
                    referencedTableName: "users",
                    referencedColumnNames: ["id"]
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        queryRunner.dropTable('posts')
    }

}
