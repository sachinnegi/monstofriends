import React, { Component } from 'react';
import CardsArray from '../Components/CardsArray';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll'

class App extends Component {
    constructor() {
        super();
        this.state = {
        robots: [],
        searchField: ''
        }
    }


    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users=> this.setState({robots: users}));
    }


    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }
    
    render(){
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchField.toLowerCase());
        })
            return (
                <div className="tc">
                    <h1 >MOSNTOFRIENDS</h1>
                    <SearchBox searchChange= {this.onSearchChange}/>
                    <Scroll>
                        <CardsArray robots={filteredRobots} />
                    </Scroll>
                    
                    
                </div>
            );
        }

    }
export default App;