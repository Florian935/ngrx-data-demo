import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPost } from '@app/shared';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
    addPostForm!: FormGroup;

    constructor(
        private _formBuilder: FormBuilder,
        private _postService: PostService,
        private _router: Router
    ) {}

    ngOnInit(): void {
        this.addPostForm = this._formBuilder.group({
            title: ['', [Validators.required]],
            body: ['', [Validators.required]],
        });
    }

    onAddPost(): void {
        const post: IPost = { ...this.addPostForm.value };
        this._postService.add(post).subscribe((unusedPost: IPost) => {
            this._router.navigate(['/posts']);
        });
    }
}
