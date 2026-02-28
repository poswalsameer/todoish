export interface Theme {
  background: string
  heroGradient: string[]
  primaryText: string
  secondaryText: string
  accent: string
  selectedBg: string
  danger: string
}

export const theme: Theme = {
  background: '#0f1115', // Near black
  heroGradient: ['#b19cd9', '#ff77ff'], // Option D: Lavender -> Soft Magenta
  primaryText: '#e0e0e0',    // soft white-gray
  secondaryText: '#7a819b',  // muted gray
  accent: '#db88e5',     // matches hero gradient midpoint
  selectedBg: '#1e1e2e', // soft tinted background
  danger: '#e06c75',     // soft red
}
