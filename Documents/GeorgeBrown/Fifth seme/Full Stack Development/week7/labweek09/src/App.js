import logo from './logo.svg';
import './App.css';

function App() {
  const studentId = '101400994';
  const studentName = 'Jaqueline Duarte';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - I</h1>
        <h2>React JS Programming Week09 Lab exercise</h2>
        <p>{studentId}</p>
        <p>{studentName}</p>
        <p>George Brown College, Toronto</p>
      </header>
    </div>
  );
}

export default App;
