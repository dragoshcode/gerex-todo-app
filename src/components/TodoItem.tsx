import React, { useEffect, useRef, useState } from 'react';
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
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

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

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <form className='todos__item' onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          type='text'
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className='todos__item--text'
        />
      ) : todo.isDone ? (
        <s className='todos__item--data'>{todo.todo}</s>
      ) : (
        <span className='todos__item--data'>{todo.todo}</span>
      )}
      <div>
        <span className='icon'>
          <AiOutlineEdit
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
          />
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
