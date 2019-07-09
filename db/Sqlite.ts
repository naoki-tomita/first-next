import { Database } from "sqlite3";
const db = new Database("./data.db");

export async function all<T>(sql: string): Promise<T[]> {
  return new Promise(ok => db.all(sql, (_, r) => ok(r)));
}

export async function get<T>(sql: string): Promise<T> {
  return new Promise(ok => db.get(sql, (_, r) => ok(r)));
}

export async function exec(sql: string) {
  return new Promise(ok => db.exec(sql, () => ok()));
}
