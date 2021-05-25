import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Functional Component
/*function UserInfor(props){
  return(
    <div>
      <h2>Name: {props.name}<br></br>
          Age: {props.age}
      </h2>
    </div>
  );
}*/

//Class Component
class UserDetail extends React.Component{
  render(){
    return (
      <div className="UserDetail">
          <h2>Name: {this.props.name}<br></br>
              Age: {this.props.age}
          </h2>
      </div>
    );
  }
}
class UserDog extends React.Component{
  render(){
    return (
      <div className="UserDog">
        <p>My dog's name is {this.props.name}<br></br>
           He is {this.props.color}
        </p>
      </div>
    );
  }
}
class UserInfor extends React.Component{
  render(){
    return(
      <div>
        <UserDetail name={this.props.name} age={this.props.age}/>
        <UserDog name="Kiss" color="black" />
      </div>
    );
  }
}

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {seconds: 0};//private
  }
  counting(){
    //Setter
    this.setState(
      (prevState, props) => ({
        seconds : prevState.seconds + 1
      })
    );
  }
  componentDidMount(){
      this.timerID = setInterval(
        () => this.counting(), 1000
      )
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
 
  render(){
    return (
      <div>
        <h2>Time is running!</h2>
        <h2>Seconds: {this.state.seconds}s</h2>
      </div>
    );
  }
}

const element1 =<UserInfor name="Dang Thi Bao Ngan" age="21" />;
const element2 =<Counter/>;

const elements = React.createElement(
  React.Fragment,
  null,
  element1,
  element2,
);
ReactDOM.render(
    elements,
    document.getElementById('root'));