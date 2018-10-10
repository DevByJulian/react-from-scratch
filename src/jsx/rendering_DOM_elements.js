import React from 'react';
import ReactDOM from 'react-dom';


//example 1 - simple
ReactDOM.render(<h1>Hello, World!</h1>,
    document.getElementById('root')
    );
    
   
    //example 2 - calling variables in jsx
    const name = 'Osa'
    ReactDOM.render(<h1>Hello, {name}!</h1>,
    document.getElementById('root')
    );



//example 3 -calling a function in jsx
let formatName = (user) => user.firstName + ' ' + user.lastName
const user = {
    firstName: 'Osa',
    lastName: 'Julian'
}
ReactDOM.render(<h1>Hello, {formatName(user)}!</h1>,
    document.getElementById('root')
);
