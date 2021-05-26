import React, { Component } from 'react';
import NavBar from './component/navbar'
import Counters from './component/listCounter'

class App extends Component {
  state = { 
    list_counter: [
        { id: 1, value: 0},
        { id: 2, value: 0},
        { id: 3, value: 0},
        { id: 4, value: 0},  
    ]
 };
 handelIncrement = counter => {
     const counters = [ ...this.state.list_counter];
     const index = counters.indexOf(counter);
     counters[index] = counter;
     counters[index].value++;
     this.setState({counters});
 };
 handelReset = () => {
    const counters = this.state.list_counter.map( item =>
        {
            item.value = 0;
            return item;
        }
        );
        this.setState({counters});
    }

 handelDelete = counterID => {
    const counters = this.state.list_counter.filter( item => item.id !== counterID );
    this.setState({ list_counter : counters})
    console.log("Handel delete", counterID );
 };

  render() { 
    return (
      <React.Fragment>
      <NavBar 
      totalCounters={this.state.list_counter.filter( item => item.value>0).length}
      />
      <main className="container">
        <Counters
          counters = {this.state.list_counter}
          onIncrement = {this.handelIncrement}
          onDelete= {this.handelDelete}
          onReset={this.handelReset} 
        />
      </main>
      </React.Fragment>
     );
  }
}
 
export default App;