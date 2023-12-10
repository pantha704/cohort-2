/*
import { removed } from './../../../../React/John ( Coding Addict )/react-course-v3-main/04-fundamental-projects/03-reviews/starter/node_modules/@vitejs/plugin-react/dist/refreshUtils';
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  add(todo) {
    this.todos.push(todo);
    // console.log(this.todos);
  }
  remove(index) {
    const new_todos = this.todos.filter((todo) => {
      // console.log(todo, this.todos[index]);
      return todo !== this.todos[index];
    });
    // console.log(new_todos);
    this.todos = new_todos;
  }
  update(index, upatedTodo) {
    if (this.todos.length > index) this.todos[index] = upatedTodo;
  }
  getAll() {
    return this.todos.map((todo) => {
      // console.log(todo);
      return todo;
    });
  }
  get(indexOfTodo) {
    return this.todos.length > indexOfTodo ? this.todos[indexOfTodo] : null;
  }
  clear() {
    this.todos = [];
  }
}

const todo = new Todo();

// todo.add("ss");
// todo.add("ss");
// todo.add("ss");
// todo.add("ss");
// todo.update(3, "Invalid Task");
// todo.update(1, "Updated Task");
// todo.remove(1);
// todo.update(1, "Task Updated");
// const a = todo.getAll();

// console.log(a);

module.exports = Todo;
