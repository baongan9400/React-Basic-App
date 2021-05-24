import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const mydog = {
  name:"Kiss",
  color: "black",
  speak(){
  	console.log(`${this.name} parks gowgow`);
  }
};
const dog_owner = {
  name:"Dang Bao Ngan",
  age: 21,
  mydog
};
const element1 = (
  <div className="hello">
    <h1>Hello, {dog_owner.name}. I'm {dog_owner.age}</h1>
    <h2>My dog is {dog_owner.mydog.name} and {dog_owner.mydog.color}</h2>
  </div>
);

var numbers = [1,3,5,7,9]
var doubleNumber = numbers.map((item) => item * 2 + "-");

const element2 = (
  <div className="number">
    <h3>My numbers are {doubleNumber}</h3>
  </div>
);

const element = React.createElement(
  React.Fragment,
  null,
  element1,
  element2
)
ReactDOM.render(element,
                document.getElementById('root'));
