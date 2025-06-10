<template>
  <ul>
    <Suspense>
      <template #default>
        <TodoItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @delete="emit('delete', todo.id)"
          @edit="emit('edit', todo.id, $event)"
        />
      </template>
      <template #fallback>
        <li>Loading...</li>
      </template>
    </Suspense>
  </ul>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const emit = defineEmits(['delete', 'edit'])
defineProps<{ todos: any[] }>()

const TodoItem = defineAsyncComponent(() => import('./TodoItem.vue'))
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>