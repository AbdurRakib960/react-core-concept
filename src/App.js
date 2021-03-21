import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = ['Tomas alva', 'Rashid ahmed', 'Bear gail', 'akash', 'Rahul'];
  const id = [123454, 234343, 534343, 234343]

  // for product 
  const products = [
    {name: 'Photoshop', price: '$90.09'},
    {name: 'Illustrator', price: '$60.39'},
    {name: 'PDF Reader', price: '$6.76'}
  ]

  return (
    <div className="App">
      <header className="App-header">
       <h2>React practice </h2>
       <Counter></Counter>
       <Users></Users>
       
       {/* for product card */}
       {
         products.map(pd => <Card product={pd}></Card>)
       }
       {/* <Card product = {products[0]}></Card>
       <Card product = {products[1]}></Card>
       <Card product = {products[2]}></Card> */}

       {/* for person */}
       
       <Person name = {name[0]} id = {id[0]}></Person>
       <Person name = {name[1]} id = {id[1]}></Person>
       <Person name = {name[2]} id = {id[2]}></Person>
       <Person name = {name[3]} id = {id[3]}></Person>

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
    borderBottom: '1px solid white',
    minWidth: '300px'
  }
  return (
    <div style = {personStyle}>
      <h3>Name : {props.name}</h3>
      <h4>Id : {props.id}</h4>
    </div>
  )
}
// user function
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
      })

  }, [])

  return (
    <div>
      <h3>User length: {users.length}</h3>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState();

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick = {() => setCount(count + 1)}>Increase</button>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

// very simple product card practice
function Card(props) {
  const {name, price} = props.product
  const cardStyle = {
    backgroundColor: 'white',
    minWidth: '300px',
    height: '200px',
    color: 'black',
    borderRadius: '5px',
    float: 'left',
    marginBottom: '5px'
  }
  return (
    <div style = {cardStyle}>
      <h3>Name: {name}</h3>
      <p>price: {price}</p>
      <button>Buy now</button>
    </div>
  )
}

export default App;
