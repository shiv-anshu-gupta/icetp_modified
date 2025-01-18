// src/lib/db.ts
import mysql from "mysql2/promise";
import dbConfig from "../../config/database";

interface QueryParams {
  query: string; // SQL query string
  values?: any[]; // Optional array of query values
}

export async function executeQuery({
  query,
  values = [],
}: QueryParams): Promise<any> {
  const connection = await mysql.createConnection(dbConfig);
  try {
    const [results] = await connection.execute(query, values);
    return results;
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  } finally {
    await connection.end();
  }
}
