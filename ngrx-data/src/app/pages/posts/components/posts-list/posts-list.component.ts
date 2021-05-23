import { Component, Input } from '@angular/core';
import { IPost } from '@app/shared';
import { Nullable } from '@app/shared/types/nullable';
import { PostService } from './../../services/post.service';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent {
    @Input() posts: Nullable<Array<IPost>>;

    constructor(private _postService: PostService) {}

    onDeletePost(id: string): void {
        if (confirm('Are you sure you want to delete the post ?')) {
            this._postService.delete(id);
        }
    }
}
