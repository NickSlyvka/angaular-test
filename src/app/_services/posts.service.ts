import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../_models/posts.model';
import { map } from 'rxjs/operators';
import { Comments } from '../_models/comments.model';
@Injectable({
    providedIn: 'root'
})

export class PostsService {

    const id = ;

    private postsUrl = 'https://jsonplaceholder.typicode.com/posts';

    private commentsUrl = 'https://jsonplaceholder.typicode.com/comments?postId='+ +'';

    constructor(private http: HttpClient) {}

    getPosts(): Observable<Posts[]> {
        return this.http.get<Posts[]>(this.postsUrl) 
    }
    
    getPost(id: number): Observable<Posts> {
        return this.getPosts().pipe(
            map((posts: Posts[]) => posts.find(p => p.id === id))
        );
    }

    getComments(): Observable<Comments[]> {
        return this.http.get<Comments[]>(this.commentsUrl)
    }
}