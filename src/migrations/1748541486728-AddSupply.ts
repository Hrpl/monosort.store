import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSupply1748541486728 implements MigrationInterface {
    name = 'AddSupply1748541486728'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "supply" ("id" SERIAL NOT NULL, "date" character varying NOT NULL, CONSTRAINT "PK_11dcdc2def0eb6d10ed3ae0180d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "supply_product" ("id" SERIAL NOT NULL, "count" integer NOT NULL, "supplyId" integer, "productId" integer, CONSTRAINT "PK_807e3dccc756dff4e30972f045f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "supply_product" ADD CONSTRAINT "FK_bb92e02365d91f24a0c200cd240" FOREIGN KEY ("supplyId") REFERENCES "supply"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "supply_product" ADD CONSTRAINT "FK_f127e49aa08d0281b5140df547e" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "supply_product" DROP CONSTRAINT "FK_f127e49aa08d0281b5140df547e"`);
        await queryRunner.query(`ALTER TABLE "supply_product" DROP CONSTRAINT "FK_bb92e02365d91f24a0c200cd240"`);
        await queryRunner.query(`DROP TABLE "supply_product"`);
        await queryRunner.query(`DROP TABLE "supply"`);
    }

}
