import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost, POST_KEY } from '@app/shared';
import { environment } from '@environments/environment';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs';

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
        return this.http.get<Array<IPost>>(`${API_BASE_URL}/posts`);
    }

    add(post: IPost): Observable<IPost> {
        return this._http.post<IPost>(`${API_BASE_URL}/posts`, post);
    }

    update(post: Update<IPost>): Observable<IPost> {
        return this._http.put<IPost>(`${API_BASE_URL}/posts/${post.id}`, {
            ...post.changes,
        });
    }
}
