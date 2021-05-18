import { Injectable } from '@angular/core';
import { IPost, POST_KEY } from '@app/shared';
import {
    EntityCollectionServiceBase,
    EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable({
    providedIn: 'root',
})
export class PostService extends EntityCollectionServiceBase<IPost> {
    constructor(
        private _serviceElementsFactory: EntityCollectionServiceElementsFactory
    ) {
        super(POST_KEY, _serviceElementsFactory);
    }
}
