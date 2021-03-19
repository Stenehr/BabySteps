import React from 'react';
import NavBar from './NavBar';
import PostList from '../../features/posts/PostList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <PostList />
    </div>
  );
}

export default App;
