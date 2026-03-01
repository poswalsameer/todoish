import { v4 as uuidv4 } from 'uuid'
import { initDB } from '../db/index.js'
import type { Todo, DatabaseSchema } from '../types/index.js'
import type { Low } from 'lowdb'

let dbInstance: Low<DatabaseSchema> | null = null

async function getDB() {
  if (!dbInstance) {
    dbInstance = await initDB()
  }
  return dbInstance
}

export async function getTodos(): Promise<Todo[]> {
  const db = await getDB()
  await db.read()
  return db.data.todos
}

export async function addTodo(title: string): Promise<Todo> {
  const db = await getDB()
  const now = new Date().toISOString()

  const newTodo: Todo = {
    id: uuidv4(),
    title: title.trim(),
    completed: false,
    createdAt: now,
    updatedAt: now,
  }

  db.data.todos.push(newTodo)
  await db.write()
  return newTodo
}

export async function toggleTodo(id: string): Promise<void> {
  const db = await getDB()
  const todo = db.data.todos.find(t => t.id === id)

  if (todo) {
    todo.completed = !todo.completed
    todo.updatedAt = new Date().toISOString()
    await db.write()
  }
}

export async function deleteTodo(id: string): Promise<void> {
  const db = await getDB()
  db.data.todos = db.data.todos.filter(t => t.id !== id)
  await db.write()
}
