export interface Theme {
  background: string
  primary: string
  secondary: string
  accent: string
  danger: string
  muted: string
}

export const theme: Theme = {
  background: '#1A1B26', // near-black
  primary: '#e0e0e0',    // soft white-gray
  secondary: '#a0a0a0',  // muted reading text
  accent: '#bb9af7',     // muted lavender
  danger: '#f07178',     // soft red
  muted: '#565f89'       // deeply muted ui elements
}
