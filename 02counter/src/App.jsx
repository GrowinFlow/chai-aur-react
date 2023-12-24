import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0); //hock
  // const [counter, setCounter] = useState(0) //hock

  // let counter = 0;

  // functions
 
    const addValue = () => {
      if (counter<20) {
      // counter = counter + 1;
      // setCounter(counter);
      setCounter(counter + 1)


      // interview question  [please uncomment code and try step by step]
      // #01
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)

      // #02
      // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)
      // setCounter(prevCounter => prevCounter + 1)
    }
    };
 
  

    const removeValue = () => {
      if(counter>0){
      counter = counter - 1;
      setCounter(counter);
      // setCounter(counter - 1)
    }
    };
 

  return (
    // HTML
    <>
      <h1>First project!</h1>
      <br />
      <h2>
        Counter value : <span>{counter}</span>
      </h2>
      <button onClick={addValue}>Add value</button>
      &nbsp;&nbsp; &nbsp;&nbsp;
      <button onClick={removeValue}>Remove value</button>

<br />
      <b>This counter **"{counter}"** limit 0 to 20</b> {/* use {counter} in multiple time*/}
    </>
  );
}

export default App;
