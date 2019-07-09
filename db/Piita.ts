import { all, exec, get } from "./Sqlite";

async function init() {
  await exec(`
    CREATE TABLE IF NOT EXISTS piita (
      id          INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      title       TEXT    NOT NULL,
      body        TEXT    NULL
    );
  `);
}

init();

export async function list(): Promise<Array<{ id: number, title: string, body: string }>> {
  return await all(`
    SELECT * FROM piita;
  `);
}

export async function save(title: string, body: string) {
  return await exec(`
    INSERT INTO piita(title, body) VALUES("${title}", "${body}");
  `);
}

export async function getItem(id: number): Promise<{ id: number, title: string, body: string }> {
  return await get(`
    SELECT * FROM piita WHERE id = ${id};
  `);
}
