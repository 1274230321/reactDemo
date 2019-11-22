import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class SecCom extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            myCounter: 0
        }
    }

    componentDidMount() {
    }

    handleCounter(){
        let myCounter = ++this.state.myCounter;
        this.setState({
            myCounter
        })
    }
    render() {
        return(
            <div>
                my Second Component View {this.state.myCounter}
                <button onClick={this.handleCounter.bind(this)}> click me</button>
            </div>
        )
    }
}
