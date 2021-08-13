import React, {Component} from 'react';
import CardsArray from '../components/CardsArray';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import '../containers/App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({robots: users}));   
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }


    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
        <h1>Loading...</h1> :
         (
            <div className='tc'>
                <h1 className='f1'>RoboPals</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardsArray robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
         );
    }
}

export default App;


//TODO:Add a favorites tab near the search bar
//TODO:Add a toggleable favorite button on the backside of the card