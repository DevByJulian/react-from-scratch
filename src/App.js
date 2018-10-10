import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
  constructor(props){
  super(props);
  }
  render() {
  return (
    <h1>Hello {this.props.name}</h1>
  )
  }
}

const element = <Welcome name='Sam' />

ReactDOM.render(
  element,
  document.getElementById('root')
)

export default Welcome