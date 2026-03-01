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
  background: '#0b1220', // deep navy (not black)
  heroGradient: ['#38bdf8', '#06b6d4'], // Sky blue → Cyan
  primaryText: '#d6e2ff', // cool soft blue-white
  secondaryText: '#6b7da6', // blue-gray muted
  accent: '#22d3ee', // vibrant cyan accent
  selectedBg: '#111a2b', // subtle navy tint
  danger: '#f87171', // controlled soft red
}
