import React, { Component } from 'react';


import PictureCard from "./Components/PictureCard";
import Display from "./Components/Display";
import Wrapper from "./Components/Wrapper";

// to get card info from json file
import cards from "./card.json";







class App extends Component {

state = {
  cards,
  score: 0,
  clicked: [],

};






CardClick = id => {
  let guess = false;
  console.log(id);
  const newArray = this.state.chracters.map(character => {
    const newCharacter = { ...character }
    if (newCharacter.id === id && !newCharacter.clicked) {
      console.log(character);
      newCharacter.clicked = true
      guess = true;
    }
    return newCharacter
  })
  if (guess){
    this.winner(newArray);

  }
  else{
    this.loser();
  }
  
}

winner = (newArray) => {
  this.setState({ 
    score: this.state.score + 1 ,
    characters: this.shufflepic(newArray)
  })
  
}

loser = () => {
  this.setState({ score: 0, chracters: [...cards], })
}

shufflepic = (data) => {
  this.setState({
    chracters: data.sort(function (a, b) {
      return 0.5 - Math.random();
    })
  })



render() {

  return (

    <Wrapper>
      <Display>Clicky
        <br></br> Earn 4 pts and win <br></br>Score: {this.state.score}</Display>
      {this.state.chracters.map(card => (
        <PictureCard
          CardClick={this.CardClick}
          id={card.id}
          key={card.id}
          name={card.name}
          image={card.image}
        occupation={card.occupation}
        location={card.location}
        />
      ))}
    </Wrapper>
  );
}





// HandleClick = id => {
//   if (this.state.clicked.indexOf(id) === -1) {
//     this.handleIncrement();
//     this.setState({ clicked: this.state.clicked.concat(id) });
//   } else {
//     this.handleReset();

//   }
// };



// handleShuffle = () => {
//   let shuffledcards = randomcards(cards);
//   this.setState({ cards: shuffledcards });
// };



// handleIncrement = () => {
//   this.setState({ score: this.state.score + 1, correctIncorrect: "Nice!" });
//   if (this.state.score === 4) {
//     this.setState({ correctIncorrect: "You win!"});
//   }

//   this.handleShuffle();
// };



// handleReset = () => {
//   this.setState({
//     score: 0,
//     correctIncorrect: "Correct!",
//     clicked: []
//   });

//   this.handleShuffle();

// };





// render() {
//   return (
//     <Wrapper>
//       <title> Guessing Game: {this.state.score}, { this.state.correctIncorrect} </title>
// <p> Earn 4 points to win</p>

// {/* //info to be identified in json file// */}

// {this.state.cards.map(card => (
//   <PictureCard 
//     id={Card.id}
//     key={Card.id}
//     image={Card.image}
//     name={Card.name}
    
    
    
    
    
//     handleClick={this.handleClick}
//     handleIncrement={this.handleIncrement}
//     handleReset={this.handleReset}
//     handleShuffle={this.handleShuffle}
//   />
// ))}
// </Wrapper>
//     );
//   }
// }


// // import logo from './logo.svg';
// // import './App.css';

// //   render() {
// //     return (
// //       <div className="App">
// //         <header className="App-header">
// //           <img src={logo} className="App-logo" alt="logo" />
// //           <p>
// //             Edit <code>src/App.js</code> and save to reload.
// //           </p>
// //           <a
// //             className="App-link"
// //             href="https://reactjs.org"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             Learn React
// //           </a>
// //         </header>
// //       </div>
// //     );
// //   }
// }
}
}
export default App;
