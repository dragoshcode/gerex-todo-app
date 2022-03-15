import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';
import { Todo } from '../interface';
import './styles.scss'

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <form className='todos__item'>
      <span className='todos__item--data'>{todo.todo}</span>
      <div>
        <span className='icon'>
          <AiOutlineEdit />
        </span>
        <span className='icon'>
          <AiOutlineDelete />
        </span>
        <span className='icon'>
          <AiOutlineCheck />
        </span>
      </div>
    </form>
  );
};

export default TodoItem;
