import { Component, OnInit } from '@angular/core';
import { IPost } from '@app/shared';
import { Nullable } from '@app/shared/types/nullable';
import { Observable } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
    posts$?: Observable<Nullable<Array<IPost>>>;

    constructor(private _postService: PostService) {}

    ngOnInit(): void {
        this.posts$ = this._postService.entities$;
    }
}
