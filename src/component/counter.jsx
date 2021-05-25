import React, { Component } from 'react';

class Counter extends Component {
    state = {  
        count: 0
    };

    styles = {
        fontSize: 30,
        fonWeight: 'bold'
    };
    render() { 
        return ( 
            <div>
                <span style={this.styles} class="badge badge-pill badge-success m-2">{this.state.count}</span>
                <button style={{fontSize: 40}} className="btn btn-primary btn-m-2">Increment</button>
            </div>
         );
    }
}
 
export default Counter ;