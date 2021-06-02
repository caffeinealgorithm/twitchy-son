import React, { Component, Fragment } from 'react';
import { Embed, Header, Segment, Icon } from 'semantic-ui-react';
import { getStream } from '../../utils';
import EditedHeader from '../styles/Header';

class Stream extends Component<*, *> {
  state = {
    displayName: '',
    title: '',
    description: '',
    viewers: 0
  };

  componentWillMount = () => {
    this.updateViewers();
    setInterval(() => this.updateViewers(), 10000);
  };

  updateViewers = () => {
    const { match } = this.props;

    getStream(match.params.channelId).then(response => {
      this.setState({
        displayName: response.data.stream.channel.display_name,
        title: response.data.stream.channel.status,
        description: response.data.stream.channel.description,
        viewers: response.data.stream.viewers
      });
    });
  };

  render() {
    const { displayName, title, description, viewers } = this.state;

    return (
      <Fragment>
        <EditedHeader as="h2" inverted>
          {
            "If you've time, I will let you watch this whole stream (that's not really good for you health)."
          }
        </EditedHeader>
        <Embed
          active
          url={`https://player.twitch.tv/?channel=${displayName}`}
          iframe={{
            allowFullScreen: true
          }}
        />
        <Header as="h2" attached="top">
          {title}
        </Header>
        <Segment attached>{description}</Segment>
        <Segment attached>
          <Icon name="user" />
          {`${viewers} Viewers`}
        </Segment>
      </Fragment>
    );
  }
}

export default Stream;
