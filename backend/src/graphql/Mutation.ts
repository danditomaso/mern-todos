import { TodoTC } from '../models/Todo';

const Mutation = {
  // Todos
  createTodo: TodoTC.getResolver('createOne'),
  createManyTodos: TodoTC.getResolver('createMany'),
  updateTodoById: TodoTC.getResolver('updateById'),
  updateTodo: TodoTC.getResolver('updateOne'),
  updateTodos: TodoTC.getResolver('updateMany'),
  deleteTodoById: TodoTC.getResolver('removeById'),
  deleteTodo: TodoTC.getResolver('removeOne'),
  deleteTodos: TodoTC.getResolver('removeMany'),
};

export default Mutation;
