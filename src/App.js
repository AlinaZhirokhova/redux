import './App.css'
import { TodoList } from './components/todo-list/index'
import { AddTodo } from './components/add-todo/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo />
        <TodoList />
      </header>
    </div>
  );
}

export default App
