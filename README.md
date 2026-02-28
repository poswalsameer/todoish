# Enterprise Terminal UI Todo Generator (Ink + LowDB)

A fully interactive, aesthetic, persistent terminal UI (TUI) Todo application using TypeScript, Node.js, Ink, and LowDB.
Built in the spirit of Claude Code or Gemini CLI.

## Quick Start

1. **Install Dependencies:**

   ```bash
   npm install
   ```

2. **Build Project:**

   ```bash
   npm run build
   ```

3. **Run Application:**

   ```bash
   node dist/index.js
   ```

4. **Link Environment globally:**
   ```bash
   npm link
   ```
   Now you can start the application anywhere from the terminal by running:
   ```bash
   cli-todo
   ```

## Key Features

- **Ink Framework:** Interactive React-style components directly in the terminal.
- **Persistent Local DB:** Powered by `lowdb`. Data saved automatically to `~/.cli-todo/todos.json`.
- **Keyboard Shortcuts:**
  - `↑` / `↓`: Navigate list items.
  - `Space`: Toggle checkbox.
  - `D` or `d`: Delete selected item.
  - `Enter`: Add new item from the minimalist input box.
- **Strict TypeScript:** Type safe codebase.
