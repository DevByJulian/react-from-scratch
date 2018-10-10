import React from 'react';
import '../css/colorizer.css';
import ColorLabel from './color-label';


class Colorizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: ' ',
            bgColor: 'white'
        }

        this.colorValue = this.colorValue.bind(this);
        this.setNewColor = this.setNewColor.bind(this);
        // this.colorChange = this.colorChange.bind(this);
    }

    colorValue(e) {
        this.setState({
            color: e.target.value
        });

    }

    //this will work w/o binding to 'this' if colorChange is created with arrow function syntax
    colorChange = () => {
        let input = document.getElementById("colorInput");
        this.setState({
            color: input.value
        });

    }
 
    setNewColor(e) {
        this.setState({
            bgColor: this.state.color
        });

        this._input.focus();
        this._input.value = "";

        e.preventDefault();
    }

    render() {
        let squareStyle = {
            backgroundColor: this.state.color
        }
        
        return (
            <React.Fragment>
            <div id="container">
            <div className="colorArea">
            <div style={squareStyle} className="colorSquare"></div>
            <form onSubmit={this.setNewColor}>
            <input id="colorInput" /*onChange={this.colorValue} */
            ref = {
                (el) => this._input = el
            }
            placeholder="Enter a color value">         
            </input>
            <button type="submit" onClick={this.colorChange}>go</button>
            </form>
            </div>
            </div>
            <ColorLabel color={this.state.bgColor} />
            </React.Fragment>
        )
    }
}

export default Colorizer;