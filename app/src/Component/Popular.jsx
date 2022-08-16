import { Component } from 'react';
import Card from './Card';
import Loader from './Loader';

export default class Popular extends Component {
  constructor(props) {
    super();
    this.state = {
      data: null,
      language: 'All',
    };
  }

  componentDidMount() {
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          data: data,
        })
      );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.language !== this.state.language) {
      let { language } = this.state;
      fetch(
        `https://api.github.com/search/repositories?q=stars:%3E1+language:${language}&sort=stars&order=desc&type=Repositories`
      )
        .then((res) => res.json())
        .then((data) =>
          this.setState({
            data: data,
          })
        );
    }
  }

  //handleLanguage
  handleLanguage = (langu) => {
    this.setState({
      language: langu,
    });
  };
  render() {
    let { data, language } = this.state;
    let tags = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <main  className="container">
        <ul className="tags">
          {tags.map((tag) => (
            <li
              key={tag}
              className={language === tag ? 'active-tag' : ''}
              onClick={() => this.handleLanguage(tag)}
            >
              {tag}
            </li>
          ))}
        </ul>
        <section className={data ? 'cards' : 'loader'}>
          {data ? (
            data?.items?.map((elm, index) => (
              <Card key={elm.id} index={index} data={elm} />
            ))
          ) : (
            <Loader />
          )}
        </section>
      </main>
    );
  }
}
