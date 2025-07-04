import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(){
    const url = `https://jsonplaceholder.typicode.com/posts`
    return this.http.get<Post[]>(url);
  }

  deletePost(post: Post){
    const url = `https://jsonplaceholder.typicode.com/post/${post.id}`
    return this.http.delete<Post>(url)
  }
}
