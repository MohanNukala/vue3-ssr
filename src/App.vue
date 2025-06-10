<template>
  <main>
    <h1>Vue3 ToDo App</h1>
    <TodoForm @add="addTodo" />
    <section aria-live="polite">
      <TodoList :todos="todos" @delete="deleteTodo" @edit="editTodo" />
    </section>
    <div v-if="error" class="error" role="alert">{{ error }}</div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useTodoStore } from './store/todo'
import TodoList from './components/TodoList.vue'
import TodoForm from './components/TodoForm.vue'

const store = useTodoStore()
const { todos, error } = store

onMounted(() => store.fetchTodos())

function addTodo(title: string) {
  store.addTodo(title)
}
function deleteTodo(id: number) {
  store.deleteTodo(id)
}
function editTodo(id: number, title: string) {
  store.editTodo(id, title)
}
</script>

<style scoped>
main {
  max-width: 500px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px #0001;
  padding: 2rem;
}
.error {
  color: #b00;
  margin-top: 1rem;
}
</style>