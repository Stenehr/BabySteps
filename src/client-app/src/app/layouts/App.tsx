import React from 'react';
import NavBar from './NavBar';
import PostList from '../../features/posts/PostList';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container style={{ marginTop: '2em' }}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/posts" component={PostList} />
      </Container>
    </div>
  );
}

export default App;
