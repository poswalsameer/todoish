import React from 'react'
import { Box, Text } from 'ink'
import { theme } from '../../theme/index.js'

interface InputBoxProps {
  value: string
  isFocused: boolean
}

export function InputBox({ value, isFocused }: InputBoxProps) {
  return (
    <Box flexDirection="column" marginTop={2}>
      <Box
        borderStyle="round"
        borderColor={isFocused ? theme.accent : theme.muted}
        paddingX={1}
        flexDirection="row"
      >
        <Box marginRight={1}>
          <Text color={isFocused ? theme.accent : theme.muted}>›</Text>
        </Box>
        {value ? (
          <Box flexGrow={1}>
            <Text color={theme.primary}>{value}</Text>
            {isFocused && <Text color={theme.accent}>█</Text>}
          </Box>
        ) : (
          <Box flexGrow={1}>
            <Text color={theme.muted}>Add a new todo...</Text>
            {isFocused && <Text color={theme.accent}>█</Text>}
          </Box>
        )}
      </Box>
    </Box>
  )
}
