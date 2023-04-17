import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="https://guardian.ng/wp-content/uploads/2021/11/Kenya-Shujaa.jpg" alt="shujaa"/>
      <p>The Kenya Shujaa Enjoying their Singapore Sevens Tournament victory</p>
        <button className="App-button" onClick={() => alert('You clicked this button')}>Click me</button>
      </header>
    </div>
  );
}

export default App;
