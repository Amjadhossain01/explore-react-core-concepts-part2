import './App.css';
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './users';
function App() {
  function handleClick() {
    alert('Button clicked');
  }
  const handleClick2 = () => {
    alert('Button clicked 2');
  };
  const addFive = number => {
    alert(number + 5);
  };
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      {/* <button onclick="handleClick()">Click Me</button> --> //? Normal js*/}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>
      <button
        onClick={() => {
          alert('Button Clicked Three');
        }}
      >
        Click Me3
      </button>
      {/* Bejaiila */}
      <button onClick={() => addFive(4)}>Four</button>
    </>
  );
}

export default App;
