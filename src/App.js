import { useState } from "react";
import './App.css';
import Shopping_pay from "./assets/iconmonstr-shopping-bag-4.svg";

function App() {
  // const [count , setCount] = useState(0)
  // const [timerDays , setTimeDays] = useState('00');
  // const [timerHours , setTimeHours] = useState('00');
  // const [timerMinutes , setTimeMinutes] = useState('00');
  // const [timerSeconds , setTimeSeconds] = useState('00');

  // let interval = useRef();

  // const StartTimer =  () => {
  //   const CountDownd = new Date('December 12, 2021 00:00:00').getTime();

  //   interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const Distance = CountDownd - now ;

  //     const Days = Math.floor(Distance / (1000 * 60 * 60 * 24));
  //     const Hours = Math.floor((Distance  % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
  //     const Minutes = Math.floor((Distance % (1000 * 60 * 60)) / (1000 * 60));
  //     const Seconds = Math.floor((Distance % (1000 * 60)) / 1000);

  //     if (Distance < 0) {
        //stop our time
  //       clearInterval(interval.current);
  //     }else{
  //       setTimeDays(Days);
  //       setTimeHours(Hours);
  //       setTimeMinutes(Minutes);
  //       setTimeSeconds(Seconds);
  //     }
  //   }, 1000);
  // };

  // useEffect (() => {
  //   StartTimer();
  //   return () => {
  //             clearInterval(interval.current);

  //   }
  // });

    const [value ,setValue] = useState('');
    // console.log(value);
    const [todos , setTodos] = useState([
      {title : 'Semangka', count : 1},
      {title : 'Durian', count : 1},
      {title : 'Leci', count : 1}
    ]);


    const CountHandle = (index) => {
      const newTodos = [...todos]
      newTodos[index].count = newTodos[index].count + 1;
      setTodos(newTodos);
    } 

    const CountHandleMin = (index) => {
      const newTodos = [...todos]
      newTodos[index].count = newTodos[index].count - 1;
      setTodos(newTodos);
    } 

    // membuat inputan menjadi berguna

    const handleSubmit = (e) => {
      e.preventDefault();

      if (!value) {
        alert('Mohon maaf anda tidak memasukan keyword apapun');
        return
      }

      const addedTodos = [...todos, {
        title : value,
        count : 1
      }]

      setTodos(addedTodos);
      setValue('');
    }

  return (
    <>
    {/* <h1>{timerDays}</h1>
    <p>Days</p>
    <h1>{timerHours}</h1>
    <h1>{timerMinutes}</h1>
    <h1>{timerSeconds}</h1> */}

      <nav className="nav">
        <img src={Shopping_pay} alt="Logo" className="navIcon"/>
        <h1 className="navTitle">
          Shopping List
        </h1>
      </nav>

      <section className="container">
        {/* kirim value kesini */}
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={(e) => {setValue(e.target.value)}} value={value} type="text" name="input" id="input" className="input" placeholder="List"/>
          <button type="submit" className="add-button">add</button>
        </form>

    {todos.length > 0 ? (
      <div className="todos">
        {todos.map ((todos,index,arr) =>{
          return (
            <div key={index} className={`todo ${!(arr.length === index + 1 ) && 'todo-divider'}`}>
              {todos.title}

              <div className="todo-icon-wrapper">
                <div className="todo-count">{todos.count}
                  <button type="submit" className="todo-action-button" onClick={() => CountHandleMin(index)}>-</button>
                  <button type="submit" className="todo-action-button" onClick={()=> CountHandle(index)}>+</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    ) : (
      <div>kosong</div>
    )}
      </section>
    </>
  );
}

export default App;
