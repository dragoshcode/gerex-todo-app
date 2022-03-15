import './styles.scss';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <form className='input'>
      <input type='text' placeholder='Enter the task' className='input__box' />
      <button type='submit' className='input__submit'>
        Add
      </button>
    </form>
  );
};

export default InputField;
