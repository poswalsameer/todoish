import React, { useState, useEffect } from 'react'
import { Box, Text, useApp, useInput } from 'ink'
import { Header } from './components/Header.js'
import { TodoList } from './components/TodoList.js'
import { InputBox } from './components/InputBox.js'
import { getTodos, addTodo, toggleTodo, deleteTodo } from '../services/todoService.js'
import type { Todo } from '../types/todo.js'
import { theme } from '../utils/theme.js'

export function App() {
  const { exit } = useApp()
  const [todos, setTodos] = useState<Todo[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isInputFocused, setIsInputFocused] = useState(true)

  const loadTodos = async () => {
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

  useEffect(() => {
    loadTodos()
  }, [])

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

  if (isLoading) {
    return (
      <Box padding={1}>
        <Text color={theme.accent}>Loading tasks...</Text>
      </Box>
    )
  }

  return (
    <Box flexDirection="column" padding={2} width="100%">
      <Header />

      <Box flexDirection="column" marginY={1} flexGrow={1}>
        {todos.length === 0 ? (
          <Box justifyContent="center" paddingX={2} paddingY={1}>
            <Text color={theme.muted} italic>No todos yet. Add one below!</Text>
          </Box>
        ) : (
          <TodoList todos={todos} selectedIndex={selectedIndex} isFocused={!isInputFocused} />
        )}
      </Box>

      <InputBox value={inputValue} isFocused={isInputFocused} />

      <Box marginTop={1} paddingX={1} justifyContent="center">
        <Text color={theme.muted}>
          Tab Focus • ↑/↓ Move • Space Toggle • ↓ Add • Ctrl+D Drop • Esc Exit
        </Text>
      </Box>
    </Box>
  )
}
