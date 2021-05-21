import { Observable } from 'rxjs';
import { PostService } from './../../services/post.service';
import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '@app/shared';
import { Nullable } from '@app/shared/types/nullable';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent {
    @Input() posts: Nullable<Array<IPost>>;

    constructor(private _postService: PostService) {}
}
