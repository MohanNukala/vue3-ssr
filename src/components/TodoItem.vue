<template>
  <li>
    <div class="todo-content">
      <input type="checkbox" v-model="todo.completed" disabled />
      <span v-if="!editing">{{ todo.title }}</span>
      <input v-else v-model="editTitle" @keyup.enter="save" @blur="save" />
    </div>
    <div class="actions">
      <button @click="editing = !editing" :aria-label="editing ? 'Save' : 'Edit'">
        {{ editing ? '💾' : '✏️' }}
      </button>
      <button @click="emit('delete', todo.id)" aria-label="Delete">🗑️</button>
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{ todo: any }>()
const emit = defineEmits(['delete', 'edit'])
const editing = ref(false)
const editTitle = ref(props.todo.title)

function save() {
  if (editTitle.value !== props.todo.title) {
    console.log('xox-props', props, 'xox-editTitle', editTitle.value)
    emit('edit', props.todo.id, editTitle.value)
  }
  editing.value = false
}
</script>

<style scoped>
li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  
  width: 100%;
}

.todo-content {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.actions {
  margin-left: auto;
  display: flex;
  gap: 0.5rem;
}

.completed span {
  text-decoration: line-through;
  color: #aaa;
}
input[type="text"] {
  flex: 1;
  padding: 0.25rem;
}
button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1em;
}
button:hover {
  color: #42b983;
}
</style>