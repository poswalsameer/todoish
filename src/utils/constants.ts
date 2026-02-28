import os from 'node:os'
import path from 'node:path'

export const APP_DIR = path.join(os.homedir(), '.cli-todo')
export const DB_FILE = path.join(APP_DIR, 'todos.json')
