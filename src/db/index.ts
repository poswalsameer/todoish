import fs from 'node:fs'
import { JSONFilePreset } from 'lowdb/node'
import type { DatabaseSchema } from '../types/index.js'
import { APP_DIR, DB_FILE } from '../constants/index.js'

export async function initDB() {
  if (!fs.existsSync(APP_DIR)) {
    fs.mkdirSync(APP_DIR, { recursive: true })
  }

  const defaultData: DatabaseSchema = { todos: [] }
  // JSONFilePreset automatically handles reading/writing and ensures file exists and atomic writes.
  const db = await JSONFilePreset<DatabaseSchema>(DB_FILE, defaultData)

  return db
}
