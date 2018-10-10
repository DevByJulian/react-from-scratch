import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Letter extends React.Component {

    render() {
        const headerStyle = {
            fontSize: '40px',
            padding: '10px',
            margin: '10px',
            backgroundColor: this.props.bgcolor,
            color: '#333',
            display: 'inline-block',
            fontFamily: 'monospace',
            textAlign: 'center'
        }
        return (
            <div style={headerStyle}>{this.props.children} </div>
        )
    }
    
}
const element = document.getElementById('root')
ReactDOM.render(<div>
    <Letter bgcolor="#58B3FF">A</Letter>
    <Letter bgcolor="#FF605F">E</Letter>
    <Letter bgcolor="#FFD52E">I</Letter>
    <Letter bgcolor="#49DD8E">O</Letter>
    <Letter bgcolor="#AE99FF">U</Letter>
    </div>, element )

export default Letter