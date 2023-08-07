import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterNameContacTable1691376560434 implements MigrationInterface {
    name = 'AlterNameContacTable1691376560434'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "FK_c8526f623c0beed53b60cb31bf5"`);
        await queryRunner.query(`CREATE TABLE "contact" ("id" SERIAL NOT NULL, "fullName" character varying(255) NOT NULL, "email" character varying(45) NOT NULL, "telphone" character varying(16) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "clientId" integer, CONSTRAINT "UQ_eff09bb429f175523787f46003b" UNIQUE ("email"), CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "clientId"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "clientId" integer`);
        await queryRunner.query(`DROP TABLE "contact"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "FK_c8526f623c0beed53b60cb31bf5" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
