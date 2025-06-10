import { defineStore } from 'pinia'
import axios from 'axios'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchTodos() {
      if (this.todos.length > 0) return
      this.loading = true
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        this.todos = res.data
        console.log('xox-Fetched todos:', this.todos)
        this.error = null
      } catch (e) {
        this.error = 'Failed to fetch todos'
      } finally {
        this.loading = false
      }
    },
    async addTodo(title: string) {
      const tempTodo = { id: Date.now(), title, completed: false }
      this.todos.unshift(tempTodo)
      console.log('xox-todos:', this.todos)
      try {
        await axios.post('https://jsonplaceholder.typicode.com/todos', tempTodo)
        this.error = null
      } catch {
        this.error = 'Failed to add todo'
      }
    },
    async deleteTodo(id: number) {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        this.todos = this.todos.filter((t: any) => t.id !== id)
        console.log('xox-todos after delete:', this.todos)
        this.error = null
      } catch {
        this.error = 'Failed to delete todo'
      }
    },
    async editTodo(id: number, title: string) {
      try {
        const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, { title })
        this.todos = this.todos.map((t: any) => t.id === id ? { ...t, title: res.data.title } : t)
        console.log('xox-todos after edit:', this.todos)
        this.error = null
      } catch {
        this.error = 'Failed to edit todo'
      }
    }
  }
})