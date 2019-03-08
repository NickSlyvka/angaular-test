import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/_models/posts.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/_services/posts.service';
import { Comments } from 'src/app/_models/comments.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post: Posts;
  comments: Comments[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private postsService: PostsService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getPost(id);
    }
    this.postsService.getComments().subscribe(
      comments => this.comments = comments
    )
  }

  getPost(id: number) {
    this.postsService.getPost(id).subscribe(
        post => this.post = post
    )
  }

}
