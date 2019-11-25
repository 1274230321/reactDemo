import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class IntervalDate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            date : new Date()
        }
    }

    componentDidMount() {
        // eslint-disable-next-line no-unused-expressions
    this.timerID = setInterval(
        ()=>{this.tick()}
    ),1000
    }

    componentWillUnmount() {
    clearInterval(this.timerID)
    }

    tick(){
        this.setState({
                date : new Date()
            })
    }
    render() {
        return(
            <div>
                Now is {this.state.date.toLocaleString()}
            </div>
        )
    }
}
