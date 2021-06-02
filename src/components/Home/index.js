import React, { Component, Fragment } from 'react';
import Search from './Search';
import Streams from './Streams';

class Home extends Component<*, *> {
  state = {
    streams: []
  };

  setStreams = streams => {
    this.setState({ streams });
  };

  render() {
    const { streams } = this.state;

    return (
      <Fragment>
        <Search setStreams={this.setStreams} />
        <Streams streams={streams} />
      </Fragment>
    );
  }
}

export default Home;
