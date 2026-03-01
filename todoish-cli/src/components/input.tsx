import { Box, Text } from 'ink'
import { theme } from '../theme/index.js'

interface InputBoxProps {
  value: string
  isFocused: boolean
}

export function InputBox({ value, isFocused }: InputBoxProps) {
  return (
    <Box flexDirection="column" marginTop={0}>
      <Box
        borderStyle="single"
        borderTop={false}
        borderLeft={false}
        borderRight={false}
        borderColor={isFocused ? theme.accent : theme.secondaryText}
        paddingX={1}
        paddingBottom={1}
        flexDirection="row"
      >
        <Box marginRight={1}>
          <Text color={isFocused ? theme.accent : theme.secondaryText}>›</Text>
        </Box>
        {value ? (
          <Box flexGrow={1}>
            <Text color={isFocused ? theme.primaryText : theme.secondaryText}>{value}</Text>
            {isFocused && <Text color={theme.accent}>█</Text>}
          </Box>
        ) : (
          <Box flexGrow={1}>
            <Text color={theme.secondaryText}>Add a new todo...</Text>
            {isFocused && <Text color={theme.accent}>█</Text>}
          </Box>
        )}
      </Box>
    </Box>
  )
}
