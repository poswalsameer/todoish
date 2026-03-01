import { Box, Text } from 'ink'
import { TodoItem } from './todo-item.js'
import { theme } from '../theme/index.js'
import type { Todo } from '../types/index.js'

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
    <Box flexDirection="column" >
      {start > 0 && (
        <Box justifyContent="center">
          <Text color={theme.secondaryText} dimColor>⇡ {start} earlier tasks ⇡</Text>
        </Box>
      )}
      {visibleTodos.map((todo) => {
        const isSelected = todos[selectedIndex]?.id === todo.id
        return <TodoItem key={todo.id} todo={todo} isSelected={isSelected} isFocused={isFocused} />
      })}
      {end < todos.length && (
        <Box justifyContent="center">
          <Text color={theme.secondaryText} dimColor>⇣ {todos.length - end} more tasks ⇣</Text>
        </Box>
      )}
    </Box>
  )
}
