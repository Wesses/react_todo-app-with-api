import { Todo } from '../../types/Todo';
import { TodoLoader } from '../../types/TodoLoader';
import { TodoItem } from '../TodoItem';

type Props = {
  todos: Todo[];
  tempTodo: Todo | null;
  globalLoader: TodoLoader,
};

export const TodoList: React.FC<Props> = ({
  todos,
  tempTodo,
  globalLoader,
}) => {
  return (
    <section className="todoapp__main">
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          loader={globalLoader}
        />
      ))}
      {tempTodo && <TodoItem todo={tempTodo} loader={TodoLoader.All} />}
    </section>
  );
};
