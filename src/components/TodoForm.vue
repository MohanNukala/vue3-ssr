<template>
  <form @submit.prevent="submit">
    <label for="todo-input" class="sr-only">Add Todo</label>
    <input
      id="todo-input"
      v-model="title"
      type="text"
      placeholder="Add a new todo"
      required
      autocomplete="off"
    />
    <button type="submit">Add</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits(['add'])
const title = ref('')

function submit() {
  if (title.value.trim()) {
    console.log('xox- Adding todo:', title.value)
    console.log('xox-', window)
    emit('add', title.value)
    title.value = ''
  }
}
</script>

<style scoped>
form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
input {
  flex: 1;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}
button {
  padding: 0.5rem 1rem;
  border: none;
  background: #42b983;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: #369870;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
</style>