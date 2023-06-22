
import logo from './logo.svg';

import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nayoks, setNayoks] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data))
  }, [])
  // const nayoks = [
  //   {name: "Razzak", movieNo: 30},
  //   {name: "Shakib", movieNo: 50}
  // ]
  return (
    <div className="App">
      <header className="App-header">
        {
          nayoks.map(nayok => <li key={nayok.id}>{nayok.name}</li>)
        }
        {/* <MovieCounter></MovieCounter> */}


        {/* <Nayok name="Jasim" movieNo="7"></Nayok>
        <Nayok name={nayoks[0].name} movieNo={nayoks[0].movieNo}></Nayok>
        <Nayok></Nayok>
        <Nayok name={nayoks[1].name} movieNo={nayoks[1].movieNo}></Nayok> */}
      </header>
    </div>
  );
}

function MovieCounter(){
  const [count, setCount] = useState(7);

  const handleClick = () => setCount(count+1);
  return (
    <div>
      <button onClick={handleClick}>Add Movies</button>
      <h5>Number of movies: {count} </h5>
    </div>
  )
}

function Nayok(props){
  const nayokStyle = {
    border: "1px solid red",
    margin: '20px',
    width: '700px'
  }
  return (
    <div style={nayokStyle}>
      <h1>Ami Nayok {props.name}</h1>
      <h3>I have done {props.movieNo} movies</h3>
    </div>
  )
}

export default App;
