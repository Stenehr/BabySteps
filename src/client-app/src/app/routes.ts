import HomePage from './layouts/HomePage';
import PostList from '../features/posts/PostList';
import CreatePost from '../features/posts/CreatePost';
import React from 'react';

interface Route {
  path: string;
  component: React.ComponentType<any>
}

interface Routes {
  home: Route;
  posts: Route;
  editPost: Route;
  createPost: Route;
}

const r: Routes = {
  home: {
    path: '/',
    component: HomePage
  },
  posts: {
    path: '/posts',
    component: PostList
  },
  editPost: {
    path: '/posts/edit/:id',
    component: CreatePost
  },
  createPost: {
    path: '/posts/create',
    component: CreatePost
  }
};

export default r;
