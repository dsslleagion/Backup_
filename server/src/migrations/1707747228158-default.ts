import { MigrationInterface, QueryRunner } from "typeorm";

export class default1707747228158 implements MigrationInterface {
    name = 'default1707747228158'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`cliente\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`sexo\` varchar(255) NOT NULL, \`telefone\` varchar(255) NOT NULL, \`bairro\` varchar(255) NOT NULL, \`endereco\` varchar(255) NOT NULL, \`cidade\` varchar(255) NOT NULL, \`cep\` varchar(255) NOT NULL, \`redes_sociais\` varchar(255) NOT NULL, \`password\` varchar(200) NOT NULL, \`profile\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`noticias\` (\`id\` int NOT NULL AUTO_INCREMENT, \`titulo\` varchar(255) NOT NULL, \`conteudo\` varchar(255) NOT NULL, \`dataPublicacao\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`autorId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`noticias\` ADD CONSTRAINT \`FK_03430c96cac5b5dfd6cc8221be5\` FOREIGN KEY (\`autorId\`) REFERENCES \`cliente\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`noticias\` DROP FOREIGN KEY \`FK_03430c96cac5b5dfd6cc8221be5\``);
        await queryRunner.query(`DROP TABLE \`noticias\``);
        await queryRunner.query(`DROP TABLE \`cliente\``);
    }

}
