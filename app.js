// import React from 'react';
// import ReactDOM from 'react-dom';

// var Cabbage = () => (
//   <li>Cabbage</li>
// );

// var Eggs = () => (
//   <li>Eggs</li>
// );

// var GroceryListItem = (props) => (


// )
var GroceryListItem = (props) => ( 
  <ul>
    <li>{props.items[0]}</li>
    <li>{props.items[1]}</li>
    <li>{props.items[2]}</li>
  </ul>
);

var GroceryList = () => (
  <div>
    <GroceryListItem items={['Eggs', 'Cabbage', 'Cheetos']}/>
  </div>
);
    
var App = () => (

  <div>
    <h2>Grocery List</h2>
    <GroceryList /> 
  {/* here we are creating an instance of the 'GroceryList' component -- also, this is the way to comment things*/}
  </div>

);


ReactDOM.render(<App />, document.getElementById('app'));