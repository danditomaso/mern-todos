import { TodoTC } from '../models/Todo';

const Query = {
  // Todo
  todoById: TodoTC.getResolver('findById'),
  todosById: TodoTC.getResolver('findByIds'),
  todo: TodoTC.getResolver('findOne'),
  todos: TodoTC.getResolver('findMany'),
  todoCount: TodoTC.getResolver('count'),
  todoConnection: TodoTC.getResolver('connection'),
  todoPagination: TodoTC.getResolver('pagination'),
};

export default Query;
