import { MigrationInterface, QueryRunner } from "typeorm";

export class EditRelations1746296739461 implements MigrationInterface {
    name = 'EditRelations1746296739461'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "provider_id" TO "providerId"`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "providerId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_f70b268affe05f6e9df0dab57b0" FOREIGN KEY ("providerId") REFERENCES "provider"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_f70b268affe05f6e9df0dab57b0"`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "providerId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "providerId" TO "provider_id"`);
    }

}
