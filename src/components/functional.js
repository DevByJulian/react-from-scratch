import React from 'react';
import ReactDOM from 'react-dom';

let formatName = (user) => user.firstName + ' ' + user.lastName
const user = {
firstName: 'Osa',
lastName: 'Amadasun'
}
ReactDOM.render(<h1>Hello, {formatName(user)}!</h1>,
document.getElementById('root')
);
