import { DetailsPostComponent } from './components/details-post/details-post.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PostsComponent } from '@posts/components/posts.component';
import { PostsResolver } from '@posts/services/posts.resolver';
import { AddPostComponent } from '@posts/components/add-post/add-post.component';
import { EditPostComponent } from '@posts/components/edit-post/edit-post.component';

const routes: Routes = [
    {
        path: '',
        component: PostsComponent,
        resolve: { posts: PostsResolver },
    },
    { path: 'add', component: AddPostComponent },
    {
        path: 'edit/:id',
        component: EditPostComponent,
        resolve: { posts: PostsResolver },
    },
    {
        path: 'details/:id',
        component: DetailsPostComponent,
        resolve: { posts: PostsResolver },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PostsRoutingModule {}
