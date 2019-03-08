import { Component, OnInit } from '@angular/core';
import { PostsService } from '../_services/posts.service';
import { Posts } from '../_models/posts.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Posts[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe(data => {
      this.posts = data;
      console.log(data);
    })
  }

}
