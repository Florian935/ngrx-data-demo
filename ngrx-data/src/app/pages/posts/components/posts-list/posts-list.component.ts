import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
    constructor(private _postService: PostService) {}

    ngOnInit(): void {
        this._postService.getAll();
    }
}
