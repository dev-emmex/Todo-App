# Todo Application

A comprehensive Todo application built with React, featuring CRUD operations, pagination, search, and filtering capabilities.

## Features

- **Todo List Management**
  - View all todos with pagination
  - Search todos by title
  - Filter by completion status
  - Create new todos
  - Update existing todos
  - Delete todos

- **Routing**
  - Nested routes for todo details
  - 404 error page for non-existent routes
  - Error boundary for graceful error handling

- **Data Persistence**
  - Uses Dexie.js (IndexedDB) for local data storage
  - Initial data fetched from JSONPlaceholder API

- **Accessibility**
  - ARIA roles and labels
  - Semantic HTML
  - Keyboard navigation support
  - Focus management

## Technical Stack

- React
- React Router DOM
- Dexie.js
- Axios
- CSS Modules

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Project Structure

```
src/
├── components/
│   ├── ErrorBoundary.jsx
│   ├── Layout.jsx
│   └── TodoModal.jsx
├── pages/
│   ├── TodoList.jsx
│   ├── TodoDetail.jsx
│   ├── ErrorTest.jsx
│   └── NotFound.jsx
├── utils/
│   └── db.js
├── App.jsx
└── main.jsx
```

## Testing Error Boundary

Visit the "Test Error" page to trigger the error boundary and see how the application handles errors gracefully.

## Contributing

Feel free to submit issues and enhancement requests!