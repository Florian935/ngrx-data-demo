import { PostService } from './../../services/post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
        private _route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.editPostForm = this._formBuilder.group({
            title: ['', [Validators.required]],
            body: ['', [Validators.required]],
        });
    }

    onEditPost(): void {}
}
