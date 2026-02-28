import { theme } from '../theme/index.js'
import { useState, useEffect } from 'react'
import type { Todo } from '../types/index.js'
import { InputBox } from '../components/input.js'
import { Box, Text, useApp, useInput } from 'ink'
import { TodoList } from '../components/todo-list.js'
import { getTodos, addTodo, toggleTodo, deleteTodo } from '../services/todo-service.js'
import { Header } from '../components/Header.js'

export function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputValue, setInputValue] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [isInputFocused, setIsInputFocused] = useState<boolean>(true)

  const { exit } = useApp()

  async function loadTodos() {
    try {
      const loadedTodos = await getTodos()
      setTodos(loadedTodos)
      setSelectedIndex((prev) => Math.min(prev, Math.max(0, loadedTodos.length - 1)))
    } catch (err) {
      // Basic error handling
    } finally {
      setIsLoading(false)
    }
  }

  useInput((input, key) => {
    if (isLoading) return

    if (key.escape) {
      exit()
      return
    }

    if (key.tab) {
      setIsInputFocused((prev) => !prev)
      return
    }

    if (key.ctrl && input === 'd') {
      if (!isInputFocused) {
        const selected = todos[selectedIndex]
        if (selected) {
          deleteTodo(selected.id).then(() => {
            loadTodos().then(() => {
              setSelectedIndex((prev) => Math.max(0, Math.min(prev, todos.length - 2)))
            })
          })
        }
      }
      return
    }

    if (!isInputFocused) {
      if (key.upArrow) {
        setSelectedIndex((prev) => Math.max(0, prev - 1))
        return
      }

      if (key.downArrow) {
        setSelectedIndex((prev) => Math.min(todos.length - 1, prev + 1))
        return
      }

      if (input === ' ') {
        const selected = todos[selectedIndex]
        if (selected) {
          toggleTodo(selected.id).then(() => loadTodos())
        }
        return
      }
    } else {
      if (key.return) {
        if (inputValue.trim()) {
          addTodo(inputValue).then(() => {
            loadTodos()
            setInputValue('')
          })
        }
        return
      }

      if (key.backspace || key.delete) {
        setInputValue((prev) => prev.slice(0, -1))
        return
      }

      // Append standard character input (prevent capturing control sequences)
      if (input && input.length > 0 && !key.meta && !key.ctrl) {
        // Remove any weird escapes if input accidentally gets them
        const cleanInput = input.replace(/[\x00-\x1F\x7F-\x9F]/g, '')
        if (cleanInput) {
          setInputValue((prev) => prev + cleanInput)
        }
      }
    }
  })

  useEffect(() => {
    loadTodos()
  }, [])

  if (isLoading) {
    return (
      <Box padding={1}>
        <Text color={theme.accent}>Loading tasks...</Text>
      </Box>
    )
  }

  return (
    <Box flexDirection="column" paddingX={2} paddingY={0} width="100%">
      <Header />

      <Box flexDirection="column" marginY={1} flexGrow={1}>
        {todos.length === 0 ? (
          <Box justifyContent="center" paddingX={2} paddingY={1}>
            <Text color={theme.secondaryText} italic>No todos yet. Add one below!</Text>
          </Box>
        ) : (
          <TodoList todos={todos} selectedIndex={selectedIndex} isFocused={!isInputFocused} />
        )}
      </Box>

      <InputBox value={inputValue} isFocused={isInputFocused} />

      <Box marginTop={1} paddingX={1} justifyContent="center" marginBottom={1}>
        <Text color={theme.secondaryText}>
          Tab Focus • ↑/↓ Move • Space Toggle • ↓ Add • Ctrl+D Drop • Esc Exit
        </Text>
      </Box>
    </Box>
  )
}
