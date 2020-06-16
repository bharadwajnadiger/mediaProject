import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ShowvideoComponent } from './users/showvideo/showvideo.component';
import { ArticlesComponent } from './users/articles/articles.component';
import { AddvideoComponent } from './users/showvideo/addvideo/addvideo.component';
import { UserGuard } from 'src/app/core/guards/user.guard';
import { VideodetailsComponent } from './users/showvideo/videodetails/videodetails.component';



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
            path: 'videodetails',
            component:VideodetailsComponent,
            
        },
        {
            path: 'video/:type',
            component:AddvideoComponent,
        },
        {
            path: 'articles',
            component:ArticlesComponent,
        }],
        canActivate:[UserGuard]
    },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
