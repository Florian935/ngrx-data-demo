import { PostService } from './../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IPost } from '@app/shared';

@Component({
    selector: 'app-details-post',
    templateUrl: './details-post.component.html',
    styleUrls: ['./details-post.component.scss'],
})
export class DetailsPostComponent implements OnInit {
    post?: IPost;
    id?: string;

    constructor(
        private _route: ActivatedRoute,
        private _postService: PostService
    ) {}

    ngOnInit(): void {
        this.id = this._route.snapshot.params.id;
        this._postService.entities$.subscribe((posts: Array<IPost>) => {
            this.post = posts.find((post: IPost) => post.id === this.id);
        });
    }
}
