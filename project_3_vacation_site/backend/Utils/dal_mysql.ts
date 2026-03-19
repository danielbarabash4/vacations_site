import mysql from "mysql2/promise";
import config from "./Config";

const connection: any = mysql.createPool({
  host: config.mysql_host,
  user: config.mysql_user,
  password: config.mysql_password,
  database: config.mysql_database,
  port: config.mysql_port,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const execute = async (sql: string, params: any[] = []): Promise<any> => {
  try {
    const [rows] = await connection.query(sql, params);
    return rows;
  } catch (err: any) {
    console.log("MySQL Error: ", err);
    throw err;
  }
};

export default { execute };