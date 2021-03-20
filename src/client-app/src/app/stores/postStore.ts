import { makeAutoObservable } from 'mobx';
import agent from '../api/agent';
import { Post } from '../models/post';

export default class PostStore {
  posts: Post[] = [];
  loadingPosts = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadPosts = async () => {
    this.loadingPosts = true;
    try {
      const posts = await agent.Posts.list();
      this.posts = posts;
    } catch (error) {
      console.log(error);
    } finally {
      this.loadingPosts = false;
    }
  };
}
