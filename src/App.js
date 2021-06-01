import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { Fragment } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Header, Icon, Divider } from 'semantic-ui-react';
import Home from './components/Home';
import Stream from './components/Stream';
import Meta from './components/Meta';

const Content = styled.div`
  margin: 30px 0;
`;

const theme = {
  twitch: '#5e459f'
};

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${theme.twitch};
    font-family: 'Roboto', sans-serif;
    padding: 0 60px !important;
  }

  a,
  a:hover {
    color: inherit;
  }
`;

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <Fragment>
        <Meta />
        <GlobalStyle />
        <Content>
          <Header as="h2" icon inverted textAlign="center">
            <Link to="/">
              <Icon name="twitch" />
              twitchy-son
              <Header.Subheader>
                {
                  "My dad gotten all the fame, however, I can also do some of the things that he does every day (I'm way better than him)."
                }
              </Header.Subheader>
            </Link>
          </Header>
          <Divider />
        </Content>
        <Route exact path="/" component={Home} />
        <Route exact path="/streams/:channelId" component={Stream} />
      </Fragment>
    </ThemeProvider>
  </Router>
);

export default App;
