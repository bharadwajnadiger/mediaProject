import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { MenuRoutingModule } from './menu-routing.module';
import { ShowvideoComponent } from './users/showvideo/showvideo.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticlesComponent } from './users/articles/articles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AddvideoComponent } from './users/showvideo/addvideo/addvideo.component';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgxSpinnerModule } from "ngx-spinner";
import {MatListModule} from '@angular/material/list';

import { FilePondModule, registerPlugin } from 'ngx-filepond';
import { VideodetailsComponent } from './users/showvideo/videodetails/videodetails.component';

@NgModule({
  declarations: [UsersComponent, ShowvideoComponent, ArticlesComponent, AddvideoComponent, VideodetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MatMenuModule,
    MatTooltipModule,
    MenuRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    NgxSpinnerModule,
    MatListModule,
    FilePondModule
  ]
})
export class MenuModule { }
 //https://signdesk.in/uat/#/login
 //qatesting@legaldesk.com
 //Test@456
 //eeb055f7
 //demo.test.admin@legaldesk.com