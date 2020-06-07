import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ShowvideoComponent } from './users/showvideo/showvideo.component';
import { ArticlesComponent } from './users/articles/articles.component';
import { AddvideoComponent } from './users/showvideo/addvideo/addvideo.component';



const routes: Routes = [
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component:UsersComponent,
        children : [ {
            path: '',
            redirectTo: 'videolibrary',
            pathMatch: 'full'
        },
        {
            path: 'videolibrary',
            component:ShowvideoComponent,
            
        },
        {
            path: 'video/:type',
            component:AddvideoComponent,
        },
        {
            path: 'articles',
            component:ArticlesComponent,
        }]
    },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
