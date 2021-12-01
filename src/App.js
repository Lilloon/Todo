import './App.css';
import Button from './molecules/Button/Button'

function App() {
  return (
    <div className="App">
      <Button onClick={() => {console.log('Hi!')}} text='Нажми на меня!'/>
    </div>
  );
}

export default App;
