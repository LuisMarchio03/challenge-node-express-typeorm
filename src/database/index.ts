import { DataSource } from "typeorm";

export const appDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'), 
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ["src/modules/infra/typeorm/entities/*.ts"],
  synchronize: true
});

export const connectToDatabase = async () => {
  try {
    await appDataSource.initialize();
    console.log('Connected to database');
  } catch (err) {
    console.error('Error connecting to database:', err);
    process.exit(1);
  }
};
