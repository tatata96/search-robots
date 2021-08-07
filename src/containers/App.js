import React, { Component } from 'react';//destructuring
import CardList from '../components/CardList';
//import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';



import { render } from '@testing-library/react';


//App.js te SearchBox , CardList falan var bunlar pure component
//App.js stateleri barındırdığı için SMART COMPONENT ve class App syntaxini kullanılıyolar 

class App extends Component {

  constructor() {
    super();
    this.state = {//our App component has 2 states, state is what changes in an app, what describes the app
      robots: [],//our state robots is passed down as probs to aşağıda CardList e
      //even though CardList accepts robots as probs
      //App has it as state so now it can change it 
      //real life scenarioda(ilk halinde robots:robots,tu) robots:[] olur ve site load olunca array internetten bir serverdan verilerle doldulur
      searchfield: ''//onSearchRobotChange burayı değiştiriyor
    }//react uses the states to render and pass them as props to the components(SearchBox,CardList vb)->aşağıda olan
    console.log('constructor');

  }



  componentDidMount() {//runs automatically with mounting
    //this.setState({ robots: robots });//we update state 
    fetch('https://jsonplaceholder.typicode.com/users')//updating state after we fetch, we get a response
      //aynı şey daha uzun yazımlısı
      // .then(response => {
      //   return response.json();//convert the response 
      // })
      // .then(users => {
      //   this.setState({ robots: users })
      // })
      .then(response => response.json())//convert the response  
      .then(users => this.setState({ robots: users }))//and we are updating state
    // .then(users => {}) -> böyle olunca LOADING yazıyor
    console.log('componentDidMount');

  }
  //use arrow functions when implementing your own methods, öbür türlü
  //this.state.robots un this ini App değil de event <input içinde olduğu için input sanıyo
  onSearchRobotChange = (event) => {
    //console.log(event.target.value);//returns input value when a key is entered 
    this.setState({ searchfield: event.target.value })

  }
  render() {
    //const {robots,searchfield}=this.state; destrucrtuing yaparak this.state.robots yerine robots yazabilirim
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    console.log(filteredRobots);
    console.log('render');

    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>
    }
    else {
      return (
        <div className="tc">
          <h1 className="f2">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchRobotChange} />
          <Scroll>
            <CardList robots={filteredRobots}></CardList>
          </Scroll>
        </div>
      );
    }


  }
  //Scroll bir component ı wrapleyen bir componenet

}
//<SearchBox searchChange={this.onSearchRobotChange}/> -> searchChange(function) prop olarak alınacak, SearchBoxta
//this means the App here 
//searchbox has to communicate with cardlist
//same as:
//<CardList robots={robots}></CardList>

//<SearchBox searchChange={this.onSearchRobotChange} /> :
//whenever there is an onChange on the input it lets the App know,runs onSearchRobotChange
//runs the function with the event, updates the searchfield  to whatever user types

export default App;

//constructor runs first
//we run render, componentDidMount dokümandaki sıradaki gibi
//ama sonra tekrar render runlıyo
//state değişikliği olduğunda(array boş yaratılmıştı, orda robots:robots; yapılıyo) Updating kısmına gidiyor
//ve ordaki methodları tek tek runlıyor
//o  methodlardan biri de render, bu yüzden render tekrar runlanmış oluyo