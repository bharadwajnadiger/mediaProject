import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VideosService } from 'src/app/core/services/videos.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.scss']
})
export class AddvideoComponent implements OnInit, OnDestroy {
  addVideoForm:FormGroup;
  subscription: Subscription;
  routeResponse: any;
  title: string;

  constructor(private formBuilder: FormBuilder, private videoService:VideosService,private router: Router, private route:ActivatedRoute) {
    this.addVideoForm = this.formBuilder.group({
      name: [, [Validators.required]],
      title: [, [Validators.required]],
      language: [, [Validators.required]],
      userid:[]
    })
    this.route.params.subscribe( response =>{
      this.routeResponse = response.type;
      if(this.routeResponse){
        if(this.routeResponse == "add"){
          this.title="Add video";
        }
        else if(this.routeResponse == "edit"){
          this.title="Edit video";
          this.route.queryParams.subscribe( response =>{
            if(response.name){
              this.addVideoForm.patchValue(response);
            }
            else{
              this.router.navigate(['/menu/users/videolibrary']);
            }
          })
        }
        else{
          this.router.navigate(['/menu/users/videolibrary']);
        }
      }
      else{
        this.router.navigate(['/menu/users/videolibrary']);
      }
    })
   
   
   
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.addVideoForm.valid) {
      if(this.routeResponse ==="add"){
        let userDetails =JSON.parse(localStorage.getItem("userDetails"));
        this.addVideoForm.value.userid = userDetails._id;
        this.subscription = this.videoService.addVideo(this.addVideoForm.value).subscribe(response => {      
              this.router.navigate(['/menu/users/videolibrary']);
            
        }, error => {
          // alertify.set('notifier', 'position', 'bottom-center');
          // alertify.error(error);
         // this.router.navigate(['/user']);
        })
      }
      if(this.routeResponse ==="edit"){
        let userDetails =JSON.parse(localStorage.getItem("userDetails"));
        this.addVideoForm.value.userid = userDetails._id;
        this.subscription = this.videoService.editVideo(this.addVideoForm.value).subscribe(response => {      
              this.router.navigate(['/menu/users/videolibrary']);
            
        }, error => {
          // alertify.set('notifier', 'position', 'bottom-center');
          // alertify.error(error);
         // this.router.navigate(['/user']);
        })
      }
     
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

  }

}
