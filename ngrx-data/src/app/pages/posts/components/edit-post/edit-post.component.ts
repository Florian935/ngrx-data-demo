import { PostService } from './../../services/post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from '@app/shared';
import { Update } from '@ngrx/entity';

@Component({
    selector: 'app-edit-post',
    templateUrl: './edit-post.component.html',
    styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
    editPostForm!: FormGroup;
    id?: string;

    constructor(
        private _formBuilder: FormBuilder,
        private _postService: PostService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {}

    ngOnInit(): void {
        this.editPostForm = this._formBuilder.group({
            title: ['', [Validators.required]],
            body: ['', [Validators.required]],
        });

        this.id = this._route.snapshot.params.id;
        this._postService.entities$.subscribe((posts: Array<IPost>) => {
            if (posts.length) {
                const post = posts.find((post: IPost) => post.id === this.id);
                this.editPostForm.patchValue({
                    title: post?.title,
                    body: post?.body,
                });
            }
        });
    }

    onEditPost(): void {
        const post: IPost = { ...this.editPostForm.value, id: this.id };
        this._postService.update(post);
        this._router.navigate(['/posts']);
    }
}
