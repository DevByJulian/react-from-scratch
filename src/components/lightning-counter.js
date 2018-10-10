import React, { Component } from 'react';

class LightningCounter extends React.Component {
      constructor(props) {    
        super(props);     
        this.state = {      
            strikes: 0    
        };  

        this.timerTick = this.timerTick.bind(this);
    }   

    
        
        timerTick() {    
            this.setState((prevState) => {      
                return {
                    strikes:prevState.strikes + 100    
                };
            });  
        }   
        
        componentDidMount() {    
            setInterval(this.timerTick, 1000);  
        }

    render() {
        let counterStyle = {
            color: "#66FFFF",
            fontSize: 50
        }

        let count = this.state.strikes.toLocaleString()
        return (
            <h1 style={counterStyle}>{count}</h1>
        )
    }
}

class LightningCounterDisplay extends React.Component {
    render() {
        let commonStyle = { 
            margin: 0,      
            padding: 0
        };     
        
        let divStyle = {      
            width: 250,      
            textAlign: "center",      
            backgroundColor: "#020202",      
            padding: 40,      
            fontFamily: "sans-serif",      
            color: "#999999",      
            borderRadius: 10    
        };     
        
        let textStyles = {      
            emphasis: {        
                fontSize: 38,        
                ...commonStyle      
            },      
            
            smallEmphasis: {        
                ...commonStyle      
            },      
                small: {        
                    fontSize: 17,        
                    opacity: 0.5,        
                    ...commonStyle      }    };
        return (
            <div style={divStyle}><LightningCounter />
            <h2 style={textStyles.smallEmphasis}>LIGHTNING STRIKES</h2>
            <h2 style={textStyles.emphasis}>WORLDWIDE</h2>        
            <p style={textStyles.small}>(since you loaded this example)</p>
            </div>
        );
    }
}

export default LightningCounterDisplay