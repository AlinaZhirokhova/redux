// import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, FILTER_TODO } from "../types/todo"
import { ADD_TODO, TOGGLE_TODO } from "../types/todo"

let nextTodoId = 0

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
})

// export const deleteTodo = () => ({
//   type: DELETE_TODO,
//   payload: {

//   }
// })

// export const filterTodo = () => ({
//   type: FILTER_TODO,
//   payload: {

//   }
// })