import React from 'react';
import NavBar from './NavBar';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router';
import Routes, { AppRoute } from '../routes';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container style={{ marginTop: '2em' }}>
        {Object.entries(Routes).map(([key, route]: [string, AppRoute], i) => (
          <Route key={i}
            exact
            path={route.path}
            component={route.component}
          />
        ))}
      </Container>
    </div>
  );
}

export default App;
