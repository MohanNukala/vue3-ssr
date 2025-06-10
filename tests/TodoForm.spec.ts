import { render, fireEvent } from '@testing-library/vue'
import TodoForm from '../src/components/TodoForm.vue'

test('emits add event with input value', async () => {
  const { getByPlaceholderText, getByText, emitted } = render(TodoForm)
  const input = getByPlaceholderText('Add a new todo')
  await fireEvent.update(input, 'Test todo')
  await fireEvent.click(getByText('Add'))
  expect(emitted().add[0]).toEqual(['Test todo'])
})