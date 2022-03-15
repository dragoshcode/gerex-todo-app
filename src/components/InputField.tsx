import './styles.scss';

const InputField = () => {
  return (
    <form className='input'>
      <input type='text' placeholder='Enter the task' className='input__box'/>
      <button type='submit' className='input__submit'>Add</button>
    </form>
  );
};

export default InputField;
