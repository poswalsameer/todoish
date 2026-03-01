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
  const checkbox = todo.completed ? <Text color={checkboxColor}>■</Text> : <Text color={checkboxColor}>☐</Text>

  const isHighlighted = isSelected && isFocused

  let titleColor = theme.secondaryText
  if (isHighlighted) {
    titleColor = theme.primaryText
  } else if (todo.completed) {
    titleColor = theme.secondaryText
  }

  return (
    <Box paddingX={1} marginY={0.5}>
      <Box
        flexGrow={1}
        paddingX={1}
        flexDirection="row"
        alignItems="center"
      >
        <Box marginRight={2} minWidth={1}>
          {isHighlighted ? <Text color={theme.accent} bold>❯</Text> : <Text> </Text>}
        </Box>
        <Box marginRight={2}>
          {checkbox}
        </Box>
        <Box flexGrow={1}>
          <Text
            color={titleColor}
            dimColor={todo.completed && !isHighlighted}
            strikethrough={todo.completed}
            bold={isHighlighted}
            underline={isHighlighted}
          >
            {todo.title}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
