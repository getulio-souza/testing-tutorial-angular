import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{

  constructor(
    private postService: PostService
  ){}
  posts: Post[] = [];

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() {
    this.postService.getPosts().subscribe((posts) => {
      console.log('posts retornados:', posts)
      this.posts = posts
    })
  }

  deletePost(post: Post) {
    this.posts = this.posts.filter(p => p.id !== post.id);
    this.postService.deletePost(post).subscribe();
  }
}
