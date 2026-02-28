import React from 'react'
import { Box, Text } from 'ink'

export function Header() {
  return (
    <Box paddingY={1} justifyContent="center" borderStyle="round" borderColor="cyan">
      <Text bold color="cyan">
        ✨ CLI TODO ✨
      </Text>
    </Box>
  )
}
