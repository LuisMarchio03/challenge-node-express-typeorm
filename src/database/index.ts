
// export const appDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "seu_usuario",
//     password: "sua_senha",
//     database: "nome_do_banco",
//     entities: ["src/modules/infra/typeorm/entities/*.ts"],
//     synchronize: true
//  });
import { DataSource } from "typeorm";

export const appDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST, // Use environment variables
  port: parseInt(process.env.DB_PORT || '5432'), // Handle potential missing port
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ["src/modules/infra/typeorm/entities/*.ts"],
  synchronize: true // Consider setting to false in production
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
