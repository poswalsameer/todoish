import { Box, Text } from 'ink'
import { theme } from '../theme/index.js'
import { GradientText } from './gradient-text.js'

const ASCII_LOGO = `
  _______  ____  _____   ____  _____  _____ _    _ 
 |__   __|/ __ \\|  __ \\ / __ \\|_   _|/ ____| |  | |
    | |  | |  | | |  | | |  | | | | | (___ | |__| |
    | |  | |  | | |  | | |  | | | |  \\___ \\|  __  |
    | |  | |__| | |__| | |__| |_| |_ ____) | |  | |
    |_|   \\____/|_____/ \\____/|_____|_____/|_|  |_|
`.replace(/^\n/, '') // remove first empty newline

export function Header() {
  return (
    <Box flexDirection="column" alignItems="center" marginTop={2} marginBottom={1}>
      <GradientText text={ASCII_LOGO} colors={theme.heroGradient} />
    </Box>
  )
}
