import React, { Component, Fragment } from 'react';
import { Input, Dropdown } from 'semantic-ui-react';
import _ from 'lodash';
import { fetchStreams } from '../../utils';
import Status from './Status';

const limits = [];

class Search extends Component<*, *> {
  state = {
    query: '',
    limit: window.localStorage.getItem('limit')
      ? parseInt(window.localStorage.getItem('limit'), 10)
      : 20,
    serviceStatus: true,
    errorMessage: ''
  };

  search = _.debounce(() => {
    const { query, limit } = this.state;
    const { setStreams } = this.props;

    if (query && limit) {
      fetchStreams(query, limit)
        .then(response => {
          this.setState({ serviceStatus: true, errorMessage: '' });
          setStreams(response.data.streams);
        })
        .catch(error => {
          if (error.response) {
            this.setState({
              query: '',
              serviceStatus: false,
              errorMessage: this.getErrorMessage(error.response.data.error)
            });
          }
        });
    }
  }, 500);

  getErrorMessage = errorMessage =>
    errorMessage === 'Service Unavailable'
      ? 'Upstream service is unavailable (just try again and again).'
      : "Something's wrong with the upstream (my dad's fault).";

  componentWillMount = () => {
    for (let i = 1; i <= 100; i += 1) {
      if (i % 10 === 0) {
        limits.push({
          key: i,
          text: `${i} results`,
          value: i
        });
      }
    }
  };

  setQuery = event => {
    this.setState({ query: event.target.value }, this.search());
  };

  setLimit = (event, { value }) => {
    this.setState(
      { limit: parseInt(value, 10) },
      window.localStorage.setItem('limit', parseInt(value, 10)),
      this.search()
    );
  };

  render() {
    const { query, limit, serviceStatus, errorMessage } = this.state;

    return (
      <Fragment>
        <Input
          label={
            <Dropdown
              defaultValue={limit}
              options={limits}
              onChange={this.setLimit}
            />
          }
          labelPosition="right"
          placeholder="Which sweet stream are you looking for?"
          value={query}
          onChange={this.setQuery}
          fluid
        />
        <Status serviceStatus={serviceStatus} errorMessage={errorMessage} />
      </Fragment>
    );
  }
}

export default Search;
