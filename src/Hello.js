import React from 'react';
import './Hello.css';

class Hello extends React.Component {
    render() {
        return (
        <div className ='f1 tc'>
            <h1>Robopals Future Home</h1>
            <p>{this.props.greeting}</p>
        </div>
        );
    }
}


export default Hello;