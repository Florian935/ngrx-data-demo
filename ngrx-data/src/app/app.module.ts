import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { PostsComponent } from '@posts/components/posts.component';
import { PostsListComponent } from '@posts/components/posts-list/posts-list.component';
import { EditPostComponent } from '@posts/components/edit-post/edit-post.component';
import { DetailsPostComponent } from '@posts/components/details-post/details-post.component';
import { HomeComponent } from '@home/components/home.component';
import { AddPostComponent } from './pages/posts/components/add-post/add-post.component';

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
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
