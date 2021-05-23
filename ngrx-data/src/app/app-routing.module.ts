import { PostsResolver } from './pages/posts/services/posts.resolver';
import { PostsComponent } from '@posts/components/posts.component';
import { DetailsPostComponent } from '@posts/components/details-post/details-post.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@home/components/home.component';
import { AddPostComponent } from '@posts/components/add-post/add-post.component';
import { EditPostComponent } from '@posts/components/edit-post/edit-post.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'posts',
        component: PostsComponent,
        resolve: { posts: PostsResolver },
    },
    { path: 'posts/add', component: AddPostComponent },
    {
        path: 'posts/edit/:id',
        component: EditPostComponent,
        resolve: { posts: PostsResolver },
    },
    {
        path: 'posts/details/:id',
        component: DetailsPostComponent,
        resolve: { posts: PostsResolver },
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
