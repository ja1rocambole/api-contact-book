import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1691375215015 implements MigrationInterface {
  name = "CreateTable1691375215015";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "clients" ("id" SERIAL NOT NULL, "fullName" character varying(255) NOT NULL, "email" character varying(45) NOT NULL, "password" character varying(120) NOT NULL, "telphone" character varying(16) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email"), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "password"`);
    await queryRunner.query(
      `ALTER TABLE "clients" ADD "password" character varying(120) NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE "clients" ADD "clientId" integer`);
    await queryRunner.query(
      `ALTER TABLE "clients" ADD CONSTRAINT "FK_c8526f623c0beed53b60cb31bf5" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "clients" DROP CONSTRAINT "FK_c8526f623c0beed53b60cb31bf5"`
    );
    await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "clientId"`);
    await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "password"`);
    await queryRunner.query(
      `ALTER TABLE "clients" ADD "password" character varying(120) NOT NULL`
    );
    await queryRunner.query(`DROP TABLE "clients"`);
  }
}
