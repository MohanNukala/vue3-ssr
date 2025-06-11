# Vue 3 SSR ToDo App

## Project Overview

This project is a modern ToDo application built with Vue 3, Vite, Pinia for state management, and server-side rendering (SSR) using vite-plugin-ssr. The app demonstrates best practices in frontend development, including accessibility, code-splitting, and API error handling.

## APIs Used

The app interfaces with the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/todos) for demo purposes:

- **GET** `/todos`: Fetches a list of todos (limited to 10).
- **POST** `/todos`: Adds a new todo.
- **PUT** `/todos/:id`: Edits a todo’s title.
- **DELETE** `/todos/:id`: Deletes a todo.

*Note: JSONPlaceholder is a mock API, so changes are not persisted on the server.*

## Main Functionality

- **Create:** Add new todos via the input form; new items appear at the top.
- **Edit:** Inline editing of todo titles.
- **Delete:** Remove todos from the list.
- **List:** Todos are displayed in a clean, accessible UI.

## SSR Implementation

- The app uses vite-plugin-ssr to render the initial HTML on the server, improving SEO and first-load performance.
- After the initial load, Vue takes over on the client for a seamless SPA experience.
- Pinia manages all todo state, ensuring reactivity and centralized logic.

## How the Application Works

- On startup, the app fetches todos from the API and displays them.
- User actions (add, edit, delete) update the local state and send API requests.
- The UI updates instantly for a responsive experience.
- All state changes are handled through the Pinia store.

## Expected Output

- A responsive, centered ToDo app interface.
- Users can add, edit, and delete todos.
- The list updates immediately on user actions.
- The app is accessible and SEO-friendly.

## How to Run Locally

1. Clone the repository or copy the project files.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open the app in your browser at the URL shown in the terminal (e.g., http://localhost:3000).

For production build or testing, use:
```
npm run build
npm run preview
npm run test
```

---

# Vue3 SSR PublicAPI Pinia Vite

### Create a simple Vue app that interfaces with a public open API.

* Bonus points for including:
* Vue 3
* API error handling
* State management using VueX or Pinia
* ES6+ features (e.g., async/await)
* Modern CSS patterns
* Server Side Rendering (SSR)
* Accessibility and SEO
* Lazy-loading non critical UI components
* Unit tests
* CSS UI Patterns
* Usage of webpack or Vite for bundling and code splitting
