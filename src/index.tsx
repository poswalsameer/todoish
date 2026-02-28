#!/usr/bin/env node

import React from 'react'
import { render } from 'ink'
import { App } from './app/App.js'
import process from 'node:process'

// Ensure the CLI app fully hides the normal cursor and can handle clears.
// But Ink handles most of this itself when it runs full screen or inline.
// We configure Ink to wipe terminal or act fully interactive.

// Clear the terminal to fulfill the prompt requirement "Clear terminal"
console.clear()

// Render into Ink
const app = render(<App />)

app.waitUntilExit().then(() => {
  console.clear() // Optionally clear on exit
  process.exit(0)
})
