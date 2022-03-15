import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';
import { Todo } from '../interface';
import './styles.scss';

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <form className='todos__item'>
      {todo.isDone ? (
        <s className='todos__item--data'>{todo.todo}</s>
      ) : (
        <span className='todos__item--data'>{todo.todo}</span>
      )}

      <div>
        <span className='icon'>
          <AiOutlineEdit />
        </span>
        <span className='icon'>
          <AiOutlineDelete onClick={() => handleDelete(todo.id)} />
        </span>
        <span className='icon'>
          <AiOutlineCheck onClick={() => handleDone(todo.id)} />
        </span>
      </div>
    </form>
  );
};

export default TodoItem;
