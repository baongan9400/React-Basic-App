import React, { Component } from 'react';
import Counter from "./counter"
class ListCounter extends Component {
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
        <div>
            <button
            onClick={this.handelReset}  
            className="btn btn-info btn-m m-2">
                Reset
            </button>
            
            {this.state.list_counter.map( item => 
            <Counter 
            key={item.id} 
            counter = {item} 
            onIncrement = {this.handelIncrement}
            onDelete= {this.handelDelete} />
            )}
        </div> );
    }
}
 
export default ListCounter;