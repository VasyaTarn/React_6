import React, { PureComponent } from 'react'

class Counter extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    plus = (value) => {
        this.setState({count: this.state.count + value});
    }

    minus = (value) => {
        this.setState({count: this.state.count - value});
    }

    render() {
        return (
            <>
                <h2>Counter</h2>
                <div>{this.state.count}</div>
                <button onClick={() => this.minus(100)}>-100</button>
                <button onClick={() => this.minus(50)}>-50</button>
                <button onClick={() => this.minus(10)}>-10</button>
                <button onClick={() => this.plus(10)}>+10</button>
                <button onClick={() => this.plus(50)}>+50</button>
                <button onClick={() => this.plus(100)}>+100</button>

            </>
        )
    }
}

export default Counter