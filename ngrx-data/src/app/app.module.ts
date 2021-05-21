import { PostsResolver } from './pages/posts/services/posts.resolver';
import { entityConfig } from '@app/entity-metadata';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { HomeComponent } from '@home/components/home.component';
import { EntityDataModule, EntityDataService } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DetailsPostComponent } from '@posts/components/details-post/details-post.component';
import { EditPostComponent } from '@posts/components/edit-post/edit-post.component';
import { PostsListComponent } from '@posts/components/posts-list/posts-list.component';
import { PostsComponent } from '@posts/components/posts.component';
import { environment } from 'src/environments/environment';
import { AddPostComponent } from '@posts/components/add-post/add-post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostDataService } from '@posts/services/post-data.service';
import { POST_KEY } from '@shared/index';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        PostsComponent,
        EditPostComponent,
        DetailsPostComponent,
        PostsListComponent,
        HomeComponent,
        AddPostComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument({ logOnly: environment.production }),
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot(entityConfig),
    ],
    providers: [PostDataService, PostsResolver],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(
        private _entityDataService: EntityDataService,
        private _postDataService: PostDataService
    ) {
        _entityDataService.registerService(POST_KEY, _postDataService);
    }
}
