import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score/Score"
import HighScore from "./components/HighScore/HighScore"
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highScore: 0,
    clickedOn: []
  };

  removeFriend = id => {

    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  //use Durstenfeld shuffle function to randomize imageArray
  shuffleFriends = (id) => {
    var array = this.state.friends
    console.log("this shuffle", this);
    var friendArray = this.state.friends;
    console.log("friendArray", friendArray);

    for (var i = this.state.friends.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];

      array[i] = array[j];
      array[j] = temp;
    }
    //reset friends to randomized array
    this.setState({ friends: array })
    //call the keepScore function to handle score and highScore
    this.keepScore(id);
  };


  keepScore = (id) => {
    console.log("button id", id);
    var inArray = this.state.clickedOn.includes(id);
    console.log("inArray?", inArray);
    if (inArray === false) {
      this.setState({ score: this.state.score + 1 })
      // this.setState({ highScore: this.state.highScore + 1 })
      console.log("score", this.state.score);
      // console.log("highScore", this.state.highScore);
      this.state.clickedOn.push(id);
      console.log("clicked on array", this.state.clickedOn);
    }
    else {
      if (this.state.highScore >= this.state.score) {
        this.setState({ score: 0 });
        this.setState({ clickedOn: [] });
      }
      else
        this.setState({ highScore: this.state.score });
        console.log("highScore", this.state.highScore);
        this.setState({ score: 0 });
        this.setState({ clickedOn: [] });
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        <Score>{this.state.score}</Score>
        <HighScore>{this.state.highScore}</HighScore>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            shuffleFriends={this.shuffleFriends}
            keepScore={this.keepScore}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
