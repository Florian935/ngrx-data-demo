import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost, POST_KEY } from '@app/shared';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';

const API_BASE_URL = environment.API_BASE_URL;

@Injectable()
export class PostDataService extends DefaultDataService<IPost> {
    constructor(
        private _http: HttpClient,
        private _httpUrlGenerator: HttpUrlGenerator
    ) {
        super(POST_KEY, _http, _httpUrlGenerator);
    }

    getAll(): Observable<Array<IPost>> {
        return this.http.get<Array<IPost>>(`${API_BASE_URL}/posts`).pipe(
            map((posts: Array<IPost>) => {
                return posts;
            })
        );
    }
}
