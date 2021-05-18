import { PostsComponent } from '@posts/components/posts.component';
import { DetailsPostComponent } from '@posts/components/details-post/details-post.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@home/components/home.component';
import { AddPostComponent } from '@posts/components/add-post/add-post.component';
import { EditPostComponent } from '@posts/components/edit-post/edit-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/add', component: AddPostComponent },
  { path: 'posts/edit/:id', component: EditPostComponent },
  { path: 'posts/details/:id', component: DetailsPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
