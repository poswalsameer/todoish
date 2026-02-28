export interface Todo {
  id: string
  title: string
  completed: boolean
  createdAt: string
  updatedAt: string
}

export interface DatabaseSchema {
  todos: Todo[]
}
