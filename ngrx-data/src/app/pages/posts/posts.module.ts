import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { POST_KEY } from '@app/shared';
import {
    EntityDataService,
    EntityDefinitionService,
    EntityMetadataMap,
} from '@ngrx/data';
import { AddPostComponent } from '@posts/components/add-post/add-post.component';
import { DetailsPostComponent } from '@posts/components/details-post/details-post.component';
import { EditPostComponent } from '@posts/components/edit-post/edit-post.component';
import { PostsListComponent } from '@posts/components/posts-list/posts-list.component';
import { PostsComponent } from '@posts/components/posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostDataService } from './services/post-data.service';
import { PostsResolver } from './services/posts.resolver';

const entityMetadata: EntityMetadataMap = {
    [POST_KEY]: {
        entityDispatcherOptions: {
            optimisticUpdate: true,
        },
    },
};

@NgModule({
    declarations: [
        PostsComponent,
        EditPostComponent,
        DetailsPostComponent,
        PostsListComponent,
        AddPostComponent,
    ],
    imports: [CommonModule, ReactiveFormsModule, PostsRoutingModule],
    providers: [PostsResolver, PostDataService],
})
export class PostsModule {
    constructor(
        private _entityDefinitionService: EntityDefinitionService,
        private _entityDataService: EntityDataService,
        private _postDataService: PostDataService
    ) {
        _entityDefinitionService.registerMetadataMap(entityMetadata);
        _entityDataService.registerService(POST_KEY, _postDataService);
    }
}
