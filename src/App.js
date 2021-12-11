import { useState } from "react";
import './App.css';

function App() {
  const [count , setCount] = useState(0)
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick = {() => {setCount(count + 1 )}}>Plus</button>
      <button onClick = {() => {setCount(count - 1 )}}>Min</button>

    </div>
  );
}

export default App;
