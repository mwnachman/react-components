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

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)}
                        onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item}</li>
    )
  }
};

var GroceryList = (props) => (
  <div>
    <h2>Grocery List</h2>
    <ul>
      {props.list.map( item => (
        <GroceryListItem item={item}/>
      ))}
    </ul>
  </div>
);

var App = (props) => (

  <div>
    <GroceryList list={props.list}/>
    {/* here we are creating an instance of the 'GroceryList' component -- also, this is the way to comment things*/}
  </div>

);

var groceryList = ['Eggs', 'Cabbage', 'Cheetos'];

ReactDOM.render(<App list={groceryList}/>, document.getElementById('app'));
