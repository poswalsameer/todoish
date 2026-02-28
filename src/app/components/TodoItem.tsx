import React from 'react'
import { Box, Text } from 'ink'
import type { Todo } from '../../types/todo.js'
import { theme } from '../../utils/theme.js'

interface TodoItemProps {
  todo: Todo
  isSelected: boolean
  isFocused: boolean
}

export function TodoItem({ todo, isSelected, isFocused }: TodoItemProps) {
  const checkboxColor = theme.muted
  const checkbox = todo.completed ? <Text color={checkboxColor}>☑</Text> : <Text color={checkboxColor}>☐</Text>

  let titleColor = theme.secondary
  if (isSelected) {
    titleColor = theme.primary
  } else if (todo.completed) {
    titleColor = theme.muted
  }

  return (
    <Box paddingX={1} marginY={0}>
      <Box marginRight={2}>
        {isSelected ? <Text color={isFocused ? theme.accent : theme.muted}>┃</Text> : <Text> </Text>}
      </Box>
      <Box marginRight={2}>
        {checkbox}
      </Box>
      <Box flexGrow={1}>
        <Text
          color={titleColor}
          dimColor={todo.completed && !isSelected}
          strikethrough={todo.completed}
          bold={isSelected}
        >
          {todo.title}
        </Text>
      </Box>
      <Box width={3} alignItems="flex-end" justifyContent="flex-end">
        {isSelected ? (
          <Text color={isFocused ? theme.danger : theme.muted}>×</Text>
        ) : (
          <Text> </Text>
        )}
      </Box>
    </Box>
  )
}
