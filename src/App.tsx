import { useState } from 'react';
import './App.scss';
import logo from './assets/logo.png';

import InputField from './components/InputField';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');

  return (
    <div className='App'>
      <div className='App__logo'>
        <img src={logo} alt='logo' />
      </div>
      <InputField />
    </div>
  );
};

export default App;
