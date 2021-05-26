import React, { Component } from 'react';

class Counter extends Component {
    formatCount(counter){
        const {value} = counter;
        return value === 0 ? 'Zero' : value;
    }
    getBadgeClass(counter){
        let classes = "badge badge-pill  m-2 badge-";
        classes += counter.value %2===0 ? "warning" : "danger";
        return classes;
    }
    render() {
        const{onIncrement, counter, onDelete } = this.props; //Destructuring
        return ( 
            <div>
                <span  className="btn btn-success btn-sm m-2">{counter.id}</span>
                <span  className={this.getBadgeClass(counter)}>{this.formatCount(counter)}</span>
                <button 
                onClick={ () => onIncrement(counter)} 
                className="btn btn-primary btn-sm m-2">
                    Increment
                </button>
                <button 
                onClick={ () => onDelete(counter.id)}
                className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
            </div>
         );
    }
}
 
export default Counter ;