import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/services/common-services/alert.service';
import { VideosService } from 'src/app/core/services/videos.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { VideoLibrary } from 'src/app/core/models/videoLibrary.modal';
import { NgxSpinnerService } from 'ngx-spinner';
declare let alertify: any;
@Component({
  selector: 'app-showvideo',
  templateUrl: './showvideo.component.html',
  styleUrls: ['./showvideo.component.scss']
})
export class ShowvideoComponent implements OnInit {
  queryParam = {
    "name": "test1",
    "language": "kannada",
    "title": "cine actor sumith got accident",
  };
  videos: VideoLibrary[] = [];
  subscription: Subscription;
  userid: any;
  constructor(private alertService: AlertService,
    private videoService: VideosService,
    private spinner: NgxSpinnerService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    
    let userDetails = JSON.parse(localStorage.getItem("userDetails"));

    if (userDetails._id) {
      this.userid=userDetails._id;
      this.getVideos(this.userid);
    }
    else {
      localStorage.clear();
      this.router.navigate(['/auth']);
    }
  }

  getVideos(id) {
    this.spinner.show();
    this.videoService.getVideos(id).subscribe(response => {
      this.spinner.hide();
      if (response.data) {
        this.videos = response.data;
        // this.videos =  this.videos.filter( video =>{
        //   return video.videourl ===  null || video.name ===   "undefined"  || video.title === "undefined"? false : true;
        // })
        console.log(this.videos);
      }
    }, error => {
      this.spinner.hide();
      this.alertService.error("something went wrong, please try again", "top-center", 3);
    })
  }

  

  deleteVideo(id) {
    alertify.confirm("Delete Video", "Do you want to delete this video ?",  
    () =>{ 
      this.videoService.deleteVideo(id).subscribe(response => {
        this.alertService.success("Successfully Deleted", "top-center", 3);
        this.getVideos(this.userid);
      }, error => {
        this.alertService.error("something went wrong, please try again", "top-center", 3);
      })
    }
    , () => { 
     
    }
     
    );
  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

  }

}
