import React,{useState} from 'react';
import './App.css';

function App() {

  const [int, setInt] = useState(null);
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setInt(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (int % 7 === 0 && int % 5 === 0 && int % 3 === 0) {
      setText('FizzBuzzBosh!');
    } else if (int % 3 === 0 && int % 5 === 0) {
      setText('FizzBuzz!');
    } else if (int % 3 === 0 && int % 7 === 0) {
      setText('FizzBosh!');
    } else if (int % 5 === 0 && int % 7 === 0) {
      setText('BuzzBosh!');
    } else if (int % 3 === 0) {
      setText('Fizz!');
    } else if (int % 5 === 0) {
      setText('Buzz!');
    } else if (int % 7 === 0) {
      setText('Bosh!');
    }else {
      setText('None!');
    }
  };

  return (
    <div className='page-container'>
      <div className='input-container'>
        <form onSubmit={handleSubmit}>
          <label style={{marginRight: '10px'}}>PLEASE ENTER A NUMBER</label>
          <input min='0' value={int} onChange={handleChange} type='number'></input>
          <button style={{cursor: 'pointer'}} type='submit'>Submit</button>
        </form>
        {text 
        && 
          <div className='text-container'>
            <h1>{text}</h1>
          </div>}
      </div>
    </div>
  );
}

export default App;
