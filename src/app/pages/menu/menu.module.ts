import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { MenuRoutingModule } from './menu-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ShowvideoComponent } from './users/showvideo/showvideo.component';

import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [UsersComponent, ShowvideoComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatMenuModule,
    MatTooltipModule,
    MenuRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    
  ]
})
export class MenuModule { }
 //https://signdesk.in/uat/#/login
 //qatesting@legaldesk.com
 //Test@456
 //eeb055f7
 //demo.test.admin@legaldesk.com