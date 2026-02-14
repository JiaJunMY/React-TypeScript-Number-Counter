import './App.css'
import { useState } from 'react';
import clickSound from './assets/sounds/buttonClick.mp3';

function App() {
  const [number, setNumber] = useState(0);
  const [value, setValue] = useState(0);
  const [warning, setWarning] = useState("");
  const audio = new Audio(clickSound);

  const soundPlay = () => {
    audio.currentTime = 0;
    audio.volume = 0.1;
    audio.play();
  }

  const increaseNum = () => {
    setNumber(number + value);
    soundPlay();
    setWarning("");
  }

  const decreaseNum = () => {
    if(number - value >= 0) {
      setNumber(number - value);
      soundPlay();
      setWarning("");
    } else {
      setWarning("Warning: Value must not be negative! >:(");
    }
  }

  const resetNum = () => {
    setNumber(0);
    soundPlay();
    setWarning("");
  }

  return (
    <>
      <div>
        <div className="title">
            <span>N</span><span>u</span>
            <span>m</span><span>b</span>
            <span>e</span><span>r</span>
          &nbsp;
            <span>C</span><span>o</span>
            <span>u</span><span>n</span>
            <span>t</span><span>e</span><span>r</span>
        </div>
        <h4 id="counter" className="counterClass">{number}</h4>
        <h4 className="warningClass">{warning}</h4>

        <div>
          <input type="text" className="inputValue" value={value} onChange={(e) => setValue(Number(e.target.value))}/>
        </div>

        <div className="buttonSection">
          <button className="increaseBtn" onClick={increaseNum}>Increase</button>
          <button className="decreaseBtn" onClick={decreaseNum}>Decrease</button> 
          <button className="resetBtn" onClick={resetNum}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
