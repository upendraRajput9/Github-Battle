import { Component } from 'react';

export default class Winner extends Component {
  constructor(props) {
    super();
    this.state = {
      user1: '',
      user2: '',
    };
  }
  componentDidMount() {
    let { playerOne, playerTwo } = this.props;
    let user1Score = playerOne.followers * 20 + playerOne.public_repos;
    let user2Score = playerTwo.followers * 20 + playerTwo.public_repos;
    if (user1Score > user2Score) {
      this.setState({
        user1: 'Winner',
        user2: 'Loser',
      });
    } else if (user1Score < user2Score) {
      this.setState({
        user2: 'Winner',
        user1: 'Loser',
      });
    } else if (user1Score === user2Score) {
      this.setState({
        user1: 'Tie',
        user2: 'Tie',
      });
    }
  }
  render() {
    let { playerOne, playerTwo, username1, username2 } = this.props;
    let user1Score = playerOne.followers * 20 + playerOne.public_repos;
    let user2Score = playerTwo.followers * 20 + playerTwo.public_repos;
    let { user1, user2 } = this.state;
    return (
      <main className="container winner-sec">
        <section>
          <article>
            <h1>{user1}</h1>
            <figure>
              <img alt={playerOne.login} src={playerOne.avatar_url} />
            </figure>
            <h4>Score:{user1Score}</h4>
            <h2>
              <a href={playerOne.repos_url}>{username1}</a>
            </h2>
            <ul>
              <li>
                <i
                  style={{ color: 'rgb(254,191,115)' }}
                  className="fa-solid fa-user"
                ></i>{' '}
                <a href={playerOne.html_url}>{playerOne.name}</a>
              </li>
              {playerOne.location ? (
                <li>
                  <i
                    style={{ color: 'rgb(144,116,255)' }}
                    className="fa-solid fa-compass"
                  ></i>{' '}
                  {playerOne.location}
                </li>
              ) : (
                ''
              )}
              {playerOne.company ? (
                <li>
                  <i
                    style={{ color: 'rgb(121,84,72)' }}
                    className="fa-solid fa-briefcase"
                  ></i>{' '}
                  <a href={playerOne.company} alt="true">
                    {playerOne.company}
                  </a>
                </li>
              ) : (
                ''
              )}
              <li>
                <i
                  style={{ color: 'rgb(129,195,244)' }}
                  className="fa-solid fa-users"
                ></i>{' '}
                {playerOne.followers} Follower
              </li>
              <li>
                <i
                  style={{ color: 'rgb(64,183,94)' }}
                  className="fa-solid fa-user-group"
                ></i>{' '}
                {playerOne.following} Following
              </li>
              <li>
                <i
                  style={{ color: 'rgb(58,76,85)' }}
                  className="fa-solid fa-code"
                ></i>{' '}
                {playerOne.public_repos} repositories
              </li>
            </ul>
          </article>
          <article>
            <h1>{user2}</h1>
            <figure>
              <img alt={playerTwo.login} src={playerTwo.avatar_url} />
            </figure>
            <h4>Score:{user2Score}</h4>
            <h2>
              <a href={playerTwo.repos_url}>{username2}</a>
            </h2>
            <ul>
              <li>
                <i
                  style={{ color: 'rgb(254,191,115)' }}
                  className="fa-solid fa-user"
                ></i>{' '}
                <a href={playerTwo.html_url}>{playerTwo.name}</a>
              </li>
              {playerTwo.location ? (
                <li>
                  <i
                    style={{ color: 'rgb(144,116,255)' }}
                    className="fa-solid fa-compass"
                  ></i>{' '}
                  {playerTwo.location}
                </li>
              ) : (
                ''
              )}
              {playerTwo.company ? (
                <li>
                  <i
                    style={{ color: 'rgb(121,84,72)' }}
                    className="fa-solid fa-briefcase"
                  ></i>{' '}
                  <a href={playerTwo.company} alt="true">
                    {playerTwo.company}
                  </a>
                </li>
              ) : (
                ''
              )}
              <li>
                <i
                  style={{ color: 'rgb(129,195,244)' }}
                  className="fa-solid fa-users"
                ></i>{' '}
                {playerTwo.followers} Follower
              </li>
              <li>
                <i
                  style={{ color: 'rgb(64,183,94)' }}
                  className="fa-solid fa-user-group"
                ></i>{' '}
                {playerTwo.following} Following
              </li>
              <li>
                <i
                  style={{ color: 'rgb(58,76,85)' }}
                  className="fa-solid fa-code"
                ></i>{' '}
                {playerTwo.public_repos} repositories
              </li>
            </ul>
          </article>
        </section>
        <footer>
          <button
            className="battle-btn"
            onClick={() => this.props.handleReset('all')}
          >
            Reset
          </button>
        </footer>
      </main>
    );
  }
}
