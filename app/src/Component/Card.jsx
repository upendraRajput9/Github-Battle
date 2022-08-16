function Card(props) {
  let { owner, stargazers_count, forks, open_issues, clone_url } = props.data;
  return (
    <article>
      <h1>#{props.index + 1}</h1>
      <figure>
        <img alt={owner.login} src={owner.avatar_url} />
      </figure>
      <h2>
        <a href={clone_url}>{owner.login}</a>
      </h2>
      <ul>
        <li>
          <i
            style={{ color: 'rgb(254,191,115)' }}
            className="fa-solid fa-user"
          ></i>{' '}
          <a href={owner.html_url}>{owner.login}</a>
        </li>
        <li>
          <i
            style={{ color: 'rgb(255,215,0)' }}
            className="fa-solid fa-star"
          ></i>{' '}
          {stargazers_count} starts
        </li>
        <li>
          <i
            style={{ color: 'rgb(183,215,240)' }}
            className="fa-solid fa-code-fork"
          ></i>{' '}
          {forks} forks
        </li>
        <li>
          <i
            style={{ color: 'rgb(241,138,147)' }}
            className="fa-solid fa-triangle-exclamation"
          ></i>{' '}
          {open_issues} open issues
        </li>
      </ul>
    </article>
  );
}

export default Card;
