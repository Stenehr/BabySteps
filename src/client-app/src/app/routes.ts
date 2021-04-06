import HomePage from './layouts/HomePage';
import PostList from '../features/posts/PostList';
import CreatePost from '../features/posts/CreatePost';
import PostDetails from '../features/posts/PostDetails';
import React from 'react';

export interface AppRoute {
  path: string;
  component: React.ComponentType<any>
  createPathWithId?: (id: string) => string;
}

interface Routes {
  home: AppRoute;
  posts: AppRoute;
  editPost: AppRoute;
  createPost: AppRoute;
  postDetails: AppRoute;
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
