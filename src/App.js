import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayok=['razzak','alomgir','josim','salman shah','shuvo']
  const Products=[
    {name:'Photoshop', Price:'$99.99'},
    {name:'Illustator', Price:'$60.00'},
    {name:'PDF reader', Price:'$50.00'}
  ]

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <p>
          I am a React Person
          <Counter></Counter>
          <Users></Users>
      </p>
        <ul>
          {
            nayok.map(nayok=><li>{nayok}</li>)
          }
          {
            Products.map(Products=><li>{Products.name}</li>)
          }
        </ul>
        
        <Product Products={Products[0]}></Product>
        <Product Products={Products[1]} ></Product>
        <Product Products={Products[2]}></Product>

        <Person name="masum" pro="footbller"></Person>
        <Person name="dela" pro="criketer"></Person>
        <Person name="fela" pro="dabaru"></Person>

      </header>
    </div>
  );
}
function Product(props){
  const styleSheet={
    color:'red',
    border:'10px solid green',
    borderRadius:'5px',
    backgroundColor:'gray',
    float:'left',
    width:'200px',
    marginTop:'10px'

  }
  const {name,Price}=props.Products
  return(
    <div style={styleSheet}>
    <h3>{name}</h3>
  <h5>{Price}</h5>
    <button>Buy now</button>
    </div>
  )
}
/*........count...........*/
function Counter(){
  const [count,setCount]= useState(0);
  //const handleIncrease = () =>setCount(count+1);
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onMouseMove={()=>setCount(count-1)}>Discase</button>
      <button onClick={()=>setCount(count+1)}>Increase</button>

    </div>
  )
}

/*.........Data load..........*/

function Users(){
  const[users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=>setUsers(data))


  },[])

  return(
    <div>
      <h3>Dynamic Users</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )

}


function Person(props){
  return(
    <div>
      <h1 style={{color:'red',margin:'10px',border:'10px solid green'}}>Name:{props.name}</h1>
  <h2 style={{color:'pink',border:'10px solid red',borderRadius:'10px'}}>Profession:{props.pro}</h2>
    </div>
  )
}

export default App;
