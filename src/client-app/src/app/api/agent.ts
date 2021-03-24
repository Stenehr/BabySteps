import axios, { AxiosResponse } from 'axios';
import { Post } from '../models/post';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const request = {
  get: <T> (url: string) => axios.get<T>(url).then(responseBody),
  post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T> (url: string) => axios.delete<T>(url).then(responseBody)
};

const Posts = {
  list: () => request.get<Post[]>('/posts'),
  create: (post: Post) => request.post<void>('/posts', post),
  update: (post: Post) => request.put<void>(`/posts/${post.id}`, post),
  delete: (id: string) => request.del<void>(`/posts/${id}`)
};

export default {
  Posts
};
