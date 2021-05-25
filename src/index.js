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
const element =<UserInfor name="Dang Thi Bao Ngan" age="21" />;
 ReactDOM.render(
    element,
    document.getElementById('root'));