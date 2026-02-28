import React from 'react'
import { Box, Text } from 'ink'

interface InputBoxProps {
  value: string
  isFocused: boolean
}

export function InputBox({ value, isFocused }: InputBoxProps) {
  return (
    <Box
      borderStyle="round"
      borderColor={isFocused ? 'cyan' : 'gray'}
      paddingX={1}
      paddingY={0}
      flexDirection="row"
    >
      <Box marginRight={1}>
        <Text color={isFocused ? 'cyan' : 'gray'} bold>❯</Text>
      </Box>
      {value ? (
        <Box flexGrow={1}>
          <Text>{value}</Text>
          {isFocused && <Text color="cyan">█</Text>}
        </Box>
      ) : (
        <Box flexGrow={1}>
          <Text color="gray" dimColor>Add a new todo...</Text>
          {isFocused && <Text color="cyan">█</Text>}
        </Box>
      )}
    </Box>
  )
}
