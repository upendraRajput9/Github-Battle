import React from 'react';

class Loader extends React.Component {
  constructor(props) {
    super();
    this.state = { tick: 0 };
  }

  render() {
    return (
      <div className="loading-text">
        <span style={{ color: '#ddd' }}>Fetching...</span>
      </div>
    );
  }
}

export default Loader;
