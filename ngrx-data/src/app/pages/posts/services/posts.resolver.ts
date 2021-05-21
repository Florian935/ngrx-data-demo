import { first, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from './post.service';

@Injectable()
export class PostsResolver implements Resolve<boolean> {
    constructor(private _postService: PostService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
        return this._postService.loaded$.pipe(
            tap((loaded: boolean) => {
                if (!loaded) {
                    this._postService.getAll();
                }
            }),
            first()
        );
    }
}
