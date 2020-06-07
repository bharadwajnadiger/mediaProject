import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavBarModel } from 'src/app/shared/nav-bar.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  navBar:NavBarModel;
  constructor(){
    this.navBar= {
      name : "App Name",
      buttons:[
        {
          icon : "video_library",
          name: "Video Library",
          urlPath:"/menu/users/videolibrary"
        },
        {
          icon : "article",
          name: "Articles",
          urlPath:"/menu/users/articles"
        }
      ]
    }
  }
  ngOnInit(): void {
    
  }

  

  

}
