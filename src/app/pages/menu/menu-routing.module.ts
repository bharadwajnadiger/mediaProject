import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ShowvideoComponent } from './users/showvideo/showvideo.component';



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
            redirectTo: 'showvideo',
            pathMatch: 'full'
        },
        {
            path: 'showvideo',
            component:ShowvideoComponent,
        }]
    },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
