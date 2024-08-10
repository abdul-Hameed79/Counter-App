import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  function decreaseHandler() {
  setCount(count - 1);
}
  function increaseHandler() {
    setCount(count + 1);
  }
  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">

      <div className="text-[#0398d4] font-semibold text-2xl">
        Increment && Decrement
      </div>

      <div className="bg-[#fff] flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]" >

        <button onClick={decreaseHandler} className="w-20 text-5xl border-r-2 border-[#bfbfbf]"> 
            - 
        </button>

        <div className="text-[#344151] font-bold text-5xl "> 
          {count} 
        </div>

        <button onClick={increaseHandler} className="w-20 text-5xl border-l-2 border-[#bfbfbf]" >
          + 
        </button>
      </div>

      <button onClick={resetHandler} className="bg-[#0398d4] text-white px-3 py-2">Reset</button>
    </div>
  );
}

export default App;
