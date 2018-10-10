import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
    Constructor(props)
    super();
    render() {
        return (
            <h1>Hello {this.props.name}</h1>
        )
    }
}

const element = <Welcome name='Sam' />

document.getElementById('root')

