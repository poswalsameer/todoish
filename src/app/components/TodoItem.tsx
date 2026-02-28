import React from 'react'
import { Box, Text } from 'ink'
import type { Todo } from '../../types/todo.js'

interface TodoItemProps {
  todo: Todo
  isSelected: boolean
  isFocused: boolean
}

export function TodoItem({ todo, isSelected, isFocused }: TodoItemProps) {
  const checkbox = todo.completed ? <Text color="green">☑</Text> : <Text color="gray">☐</Text>

  return (
    <Box>
      <Box marginRight={1}>
        {isSelected ? <Text color={isFocused ? 'cyan' : 'gray'} bold>›</Text> : <Text> </Text>}
      </Box>
      <Box marginRight={1}>
        {checkbox}
      </Box>
      <Box flexGrow={1}>
        <Text
          color={isSelected ? (isFocused ? 'cyan' : 'white') : todo.completed ? 'gray' : 'white'}
          dimColor={todo.completed && !isSelected}
          strikethrough={todo.completed}
          bold={isSelected}
          underline={isSelected && isFocused}
        >
          {todo.title}
        </Text>
      </Box>
    </Box>
  )
}
