import logo from './logo.svg';
import './App.css';

function App() {
  const design = {
    backgroundColor: 'red',
    color: 'yellow',
    padding:'10px'
  }
  return (
    <div className="App">
      <header className="App-header">
       <h2>React practice</h2>
       <Person name='Rakib Talukdar' mobile= '23434'></Person>
       <Person name='Shakib hasan' mobile='53433'></Person>
       <Person name="Rubel hussain" mobile='34565354'></Person>
       <Person name="Tomas" mobile='34553432'></Person>
      </header>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    backgroundColor: 'orange',
    color: 'black',
    margin: '10px',
    padding: '5px',
    borderBottom: '1px solid white'
  }
  return (
    <div style = {personStyle}>
      <h3>Name : {props.name}</h3>
      <h4>mobile : {props.mobile}</h4>
    </div>
  )
}

export default App;
