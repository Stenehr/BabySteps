import HomePage from './layouts/HomePage';
import PostList from '../features/posts/PostList';
import CreatePost from '../features/posts/CreatePost';
import PostDetails from '../features/posts/PostDetails';
import React from 'react';

interface Route {
  path: string;
  component: React.ComponentType<any>
  createPathWithId?: (id: string) => string;
}

interface Routes {
  home: Route;
  posts: Route;
  editPost: Route;
  createPost: Route;
  postDetails: Route;
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
    component: CreatePost,
    createPathWithId: (id: string) => `/posts/edit/${id}`
  },
  createPost: {
    path: '/posts/create',
    component: CreatePost
  },
  postDetails: {
    path: '/posts/details/:id',
    component: PostDetails,
    createPathWithId: (id: string) => `/posts/details/${id}`
  }
};

export default r;
