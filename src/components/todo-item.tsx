import { Box, Text } from 'ink'
import { theme } from '../theme/index.js'
import type { Todo } from '../types/index.js'

interface TodoItemProps {
  todo: Todo
  isSelected: boolean
  isFocused: boolean
}

export function TodoItem({ todo, isSelected, isFocused }: TodoItemProps) {
  const checkboxColor = theme.secondaryText
  const checkbox = todo.completed ? <Text color={checkboxColor}>☑</Text> : <Text color={checkboxColor}>☐</Text>

  let titleColor = theme.secondaryText
  if (isSelected) {
    titleColor = theme.primaryText
  } else if (todo.completed) {
    titleColor = theme.secondaryText
  }

  return (
    <Box paddingX={1} marginY={0}>
      <Box
        flexGrow={1}
        paddingX={1}
        flexDirection="row"
      >
        <Box marginRight={2}>
          {isSelected ? <Text color={isFocused ? theme.accent : theme.secondaryText}>┃</Text> : <Text> </Text>}
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
            <Text color={isFocused ? theme.danger : theme.secondaryText}>×</Text>
          ) : (
            <Text> </Text>
          )}
        </Box>
      </Box>
    </Box>
  )
}
