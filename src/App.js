import React, {Component} from 'react';
import CardsArray from './CardsArray';
import SearchBox from './SearchBox';
import {robots} from './robots';
import './App.css';


class App extends Component {
    constructor() {
        super()
        //state can change and affect the app
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    //This is our own function within react so we have to use correct signs( (=), (=>))
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }


    render() {
        const filteredRobots = this.state.robots.filter(robot => {
        //toLowerCase is used so we dont have to compare between upper and lower case letters
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f1'>RoboPals</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardsArray robots={filteredRobots} />
            </div>
        );
    }
}

export default App;