import { Component } from 'react';

export default class BattleFrontPage extends Component {
  constructor(props) {
    super();
  }

  render() {
    let { display, playerOne, playerTwo, username1, username2 } = this.props;
    return (
      <main className="battle-front container">
        <section>
          <h2>Instructions</h2>
          <div className="Instructions">
            <article>
              <h3>Enter two Github users</h3>
              <div>
                <i
                  style={{ color: 'rgb(254,191,115)' }}
                  className="fa-solid fa-user-group"
                ></i>
              </div>
            </article>
            <article>
              <h3>Battle</h3>
              <div>
                <i
                  style={{ color: 'rgb(114,114,114)' }}
                  className="fa-solid fa-jet-fighter"
                ></i>
              </div>
            </article>
            <article>
              <h3>See the winner</h3>
              <div>
                <i
                  style={{ color: 'rgb(255,214,1)' }}
                  className="fa-solid fa-trophy"
                ></i>
              </div>
            </article>
          </div>
        </section>
        <section className="players">
          <h2>Players</h2>
          <div>
            {display.user1 ? (
              <span>
                <figure>
                  <img
                    src={playerOne.avatar_url}
                    alt={'Avatar for ' + username1}
                  />
                </figure>
                <p>{username1}</p>
                <button onClick={() => this.props.handleReset('user1')}>
                  <i className="fa-solid fa-circle-xmark"></i>
                </button>
              </span>
            ) : (
              <form onSubmit={this.props.handleSubmit}>
                <label>Player One</label>
                <fieldset>
                  <input
                    placeholder="Github username"
                    type="text"
                    name="user1"
                    value={username1}
                    onChange={this.props.handleChange}
                  />
                  <input type="submit" value="SUBMIT" />
                </fieldset>
              </form>
            )}

            {display.user2 ? (
              <span>
                <figure>
                  <img
                    src={playerTwo.avatar_url}
                    alt={'Avatar for ' + username2}
                  />
                </figure>
                <p>{username2}</p>
                <button onClick={() => this.props.handleReset('user2')}>
                  <i className="fa-solid fa-circle-xmark"></i>
                </button>
              </span>
            ) : (
              <form onSubmit={this.props.handleSubmit}>
                <label>Player One</label>
                <fieldset>
                  <input
                    placeholder="Github username"
                    type="text"
                    name="user2"
                    value={username2}
                    onChange={this.props.handleChange}
                  />
                  <input type="submit" value="SUBMIT" />
                </fieldset>
              </form>
            )}
          </div>
          <footer>
            {display.user1 && display.user2 ? (
              <button
                className="battle-btn"
                onClick={() => this.props.handleWinner()}
              >
                BATTLE
              </button>
            ) : (
              ''
            )}
          </footer>
        </section>
      </main>
    );
  }
}
