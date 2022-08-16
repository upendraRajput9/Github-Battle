import { Component } from 'react';
import BattleFrontPage from './BattleFrontPage';
import Winner from './Winner';

export default class Battle extends Component {
  constructor(props) {
    super();
    this.state = {
      winner: false,
      display: {
        user1: false,
        user2: false,
      },
      username1: '',
      username2: '',
      playerOne: null,
      playerTwo: null,
    };
  }
  handleChange = (event) => {
    if (event.target.name === 'user1') {
      this.setState({
        username1: event.target.value,
      });
    } else if (event.target.name === 'user2') {
      this.setState({
        username2: event.target.value,
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.user1) {
      this.setState((prevState) => ({
        display: {
          user1: !prevState.display.user1,
          user2: prevState.display.user2,
        },
      }));
    }
    if (event.target.user2) {
      this.setState((prevState) => ({
        display: {
          user1: prevState.display.user1,
          user2: !prevState.display.user2,
        },
      }));
    }
  };
  //
  handleReset = (set) => {
    if (set === 'user1') {
      this.setState((prevState) => ({
        username1: '',
        display: {
          user1: !prevState.display.user1,
          user2: prevState.display.user2,
        },
      }));
    } else if (set === 'user2') {
      this.setState((prevState) => ({
        username2: '',
        display: {
          user1: prevState.display.user1,
          user2: !prevState.display.user2,
        },
      }));
    }
    if (set === 'all') {
      this.setState((prevState) => ({
        winner: false,
        username1: '',
        username2: '',
        display: {
          user1: !prevState.display.user1,
          user2: !prevState.display.user2,
        },
      }));
    }
  };

  handleWinner = () => {
    this.setState((prevState) => ({
      winner: !prevState.winner,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    let { username1, username2 } = this.state;
    if (
      prevState.username1 !== username1 &&
      username1 !== '' &&
      username1 !== `"`
    ) {
      fetch(`https://api.github.com/users/${username1}`)
        .then((res) => res.json())
        .then((data) =>
          this.setState({
            playerOne: data,
          })
        );
    }
    if (
      prevState.username2 !== username2 &&
      username2 !== '' &&
      username2 !== `"`
    ) {
      fetch(`https://api.github.com/users/${username2}`)
        .then((res) => res.json())
        .then((data) =>
          this.setState({
            playerTwo: data,
          })
        );
    }
  }

  render() {
    let { display, playerOne, playerTwo, username1, username2 } = this.state;
    return (
      <main>
        {this.state.winner ? (
          <Winner
            handleReset={this.handleReset}
            playerOne={playerOne}
            playerTwo={playerTwo}
            username1={username1}
            username2={username2}
          />
        ) : (
          <BattleFrontPage
            handleWinner={this.handleWinner}
            display={display}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleReset={this.handleReset}
            playerOne={playerOne}
            playerTwo={playerTwo}
            username1={username1}
            username2={username2}
          />
        )}
      </main>
    );
  }
}
