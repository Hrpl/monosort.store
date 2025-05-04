import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./user/user.entity"
import { Product } from "./product/product.entity"
import { Provider } from "./provider/provider.entity"

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '0000',
    database: 'monosort_store',
    entities: [User, Product, Provider],
    logging: true,
    migrations: ["src/migrations/*.ts"],
})
