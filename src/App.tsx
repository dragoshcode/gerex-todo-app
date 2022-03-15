import { useState } from 'react';

import './App.scss';

import logo from './assets/logo.png';

import InputField from './components/InputField';

import { Todo } from './interface';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleA

  return (
    <div className='App'>
      <div className='App__logo'>
        <img src={logo} alt='logo' />
      </div>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
