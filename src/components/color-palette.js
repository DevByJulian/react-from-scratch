import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export class Square extends React.Component {
    render() {
        let squareStyle = {
            height: 150,
            backgroundColor: this.props.color
        }
        return (
          <div style={squareStyle}></div>
        )
    }
}

export class Label extends React.Component {
    render() {
        let labelStyle = {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            padding: 13,
            margin: 0
        }
       return (
            <p style={labelStyle}>{this.props.color}</p>
        )
    }
}

export class Card extends React.Component {
    render() {
        let cardStyle = {
            height: 200,
            width: 150,
            padding: 0,
            backgroundColor: '#FFF',
            boxShadow: '0px 0px 5px #777'
        };

        return (
            <div style={cardStyle}>
            <Square color={this.props.color}/>
            <Label color={this.props.color} />
            </div>
        )
    }
}





