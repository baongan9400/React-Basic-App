import React, { Component } from 'react';
import Counter from "./counter"
class ListCounter extends Component {
    render() { 
        const{onIncrement, onReset, onDelete, counters } = this.props; //Destructuring
        return ( 
        <div>
            <button
            onClick={onReset}  
            className="btn btn-info btn-m m-2">
                Reset
            </button>
            {counters.map( item => 
            <Counter 
            key={item.id} 
            counter = {item} 
            onIncrement = {onIncrement}
            onDelete= {onDelete} />
            )}
        </div> );
    }
}
 
export default ListCounter;