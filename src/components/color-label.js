import React, { Component } from 'react';
import ReactDOM from 'react-dom';


let heading = document.querySelector('#colorHeading')

class ColorLabel extends React.Component {
    render() { 
        return ReactDOM.createPortal (
            ": " + this.props.color, heading
        );
    }
}
 
export default ColorLabel;