import { Box, Text } from 'ink'
import { theme } from '../theme/index.js'

export function Header() {
  return (
    <Box flexDirection="column" alignItems="center" marginTop={1} marginBottom={1}>
      <Text bold color={theme.accent}>
        TODOISH
      </Text>
      <Box marginTop={1}>
        <Text color={theme.muted}>────────────────────────────────────────</Text>
      </Box>
    </Box>
  )
}
