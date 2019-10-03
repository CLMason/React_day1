import React, { Component } from 'react'; //{Component} = destructering. Getting things out from an object or library. 
import './App.css';

//one way of making an app
// function App() {
//   return <h1>Hello World</h1>;
// }

class ExampleComponent extends Component {
  render(){
    return(
    <fieldset>
      <legend>I am an example</legend>
      <p>Lorem ipsum</p>
    </fieldset>
    )
  }
}
//using "extends" key word--inheriting from Component that already exists in React
class App extends Component { //we can also say "React.Component" and it will work
  render(){
    let message = "hello world";
    let items= ["bacon", "eggs","toast"];
    return (
      <div>
        <h1>Hello World from a class!</h1>
        <h2>This is an h2</h2>
        <p>{message}</p>
        <ul>
          {
            items.map( (item, index) =>
            <li key = {index}>{item}</li>
            )
          }
        </ul>
        <ExampleComponent/>
      </div>
    )
  }
}
export default App;

