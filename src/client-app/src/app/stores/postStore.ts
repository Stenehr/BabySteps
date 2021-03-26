import { makeAutoObservable, runInAction } from 'mobx';
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
      runInAction(() => (this.loadingPosts = false));
    }
  };

  createPost = async (post: Post) => {
    this.setPostSaveLoading(true);

    try {
      await agent.Posts.create(post);
      this.postsRegistry.set(post.id, post);
    } catch (ex) {
      console.log(ex);
    } finally {
      this.setPostSaveLoading(false);
    }
  };

  updatePost = async (post: Post) => {
    this.setPostSaveLoading(true);

    let editPost = await this.findPost(post.id);
    editPost = { ...editPost, ...post };

    try {
      await agent.Posts.update(editPost);
      this.postsRegistry.set(editPost.id, editPost);
    } catch (ex) {
      console.log(ex);
    } finally {
      this.setPostSaveLoading(false);
    }
  };

  findPost = async (id: string) => {
    if (this.postsRegistry.size < 1) {
      await this.loadPosts();
    }
    return await this.postsRegistry.get(id);
  };

  setPostSaveLoading = (loading: boolean) => (this.postSaveLoading = loading);
}
