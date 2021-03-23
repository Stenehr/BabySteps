import { makeAutoObservable } from 'mobx';
import agent from '../api/agent';
import { Post } from '../models/post';

export default class PostStore {
  postsRegistry = new Map<string, Post>();
  loadingPosts = false;
  postSaveLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  get posts() {
    return Array.from(this.postsRegistry.values());
  }

  loadPosts = async () => {
    if (this.postsRegistry.size > 0) {
      return;
    }

    this.loadingPosts = true;
    try {
      const posts = await agent.Posts.list();
      posts.forEach((post: Post) => {
        this.postsRegistry.set(post.id, post);
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.loadingPosts = false;
    }
  };

  createPost = (post: Post) => {
    this.postSaveLoading = true;

    // api call to save post;
    this.postsRegistry.set(post.id, post);

    // finally
    this.postSaveLoading = false;
  };

  updatePost = (post: Post) => {
    this.postSaveLoading = true;

    let editPost = this.findPost(post.id);
    editPost = { ...editPost, ...post };
    console.log(editPost);
    this.postsRegistry.set(editPost.id, editPost);
    // api call to change post

    // finally
    this.postSaveLoading = false;
  };

  findPost = (id: string) => this.postsRegistry.get(id);
}
