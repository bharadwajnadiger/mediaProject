import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showvideo',
  templateUrl: './showvideo.component.html',
  styleUrls: ['./showvideo.component.scss']
})
export class ShowvideoComponent implements OnInit {
  queryParam= {     "name": "test1",
  "language": "kannada",
 "title":"cine actor sumith got accident",
}
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("all");
  }
  
  deleteVideo(id){

  }

}
