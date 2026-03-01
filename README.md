# Todoish CLI

A fully interactive, aesthetic, and persistent terminal UI (TUI) Todo application using TypeScript, Node.js, Ink, and LowDB. Built in the spirit of modern, beautiful developer tools.

## Quick Start

You can install Todoish globally from the npm registry and run it from anywhere on your computer:

```bash
npm install -g todoish-poswalsameer
```

Once installed, simply type the following command in any terminal to open the app:

```bash
todoish
```

## Key Features

- **Modern UI/UX:** Built with React/Ink, styled with a gorgeous blue/cyan theme, featuring highlight states and spacing inspired by high-end modern CLIs.
- **Persistent Local DB:** Powered by `lowdb`. Data is saved automatically and securely to `~/.todoish/todos.json` on your local machine.
- **Keyboard Controls:** Super fast, mouse-free productivity!
  - `Tab`: Switch focus between the input box and the todo list
  - `↑ / ↓`: Navigate through your tasks naturally
  - `Space`: Toggle completed/active status for the selected task
  - `Enter`: Add a new task (when focused on input)
  - `Ctrl+D`: Delete the currently selected task (when focused on list)
  - `Ctrl+Backspace`: Delete word-by-word while typing in the input
  - `Esc`: Safely close the application
- **Strict TypeScript:** Built on a completely type-safe React UI codebase.
