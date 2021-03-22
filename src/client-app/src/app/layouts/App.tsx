import React from 'react';
import NavBar from './NavBar';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router';
import Routes from '../routes';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container style={{ marginTop: '2em' }}>
        <Route
          exact
          path={Routes.home.path}
          component={Routes.home.component}
        />
        <Route
          exact
          path={Routes.posts.path}
          component={Routes.posts.component}
        />
        <Route
          exact
          path={Routes.editPost.path}
          component={Routes.editPost.component}
        />
        <Route
          exact
          path={Routes.createPost.path}
          component={Routes.createPost.component}
        />
      </Container>
    </div>
  );
}

export default App;
