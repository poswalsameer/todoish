import React from 'react'
import { Box, Text } from 'ink'
import { TodoItem } from './TodoItem.js'
import type { Todo } from '../../types/todo.js'
import { theme } from '../../utils/theme.js'

interface TodoListProps {
  todos: Todo[]
  selectedIndex: number
  isFocused: boolean
}

export function TodoList({ todos, selectedIndex, isFocused }: TodoListProps) {
  const windowSize = 8
  let start = Math.max(0, selectedIndex - Math.floor(windowSize / 2))
  let end = start + windowSize

  if (end > todos.length) {
    end = todos.length
    start = Math.max(0, end - windowSize)
  }

  const visibleTodos = todos.slice(start, end)

  return (
    <Box flexDirection="column" gap={0}>
      {start > 0 && <Box paddingX={3}><Text color={theme.muted}>↑ ...</Text></Box>}
      {visibleTodos.map((todo) => {
        const isSelected = todos[selectedIndex]?.id === todo.id
        return <TodoItem key={todo.id} todo={todo} isSelected={isSelected} isFocused={isFocused} />
      })}
      {end < todos.length && <Box paddingX={3}><Text color={theme.muted}>↓ ...</Text></Box>}
    </Box>
  )
}
