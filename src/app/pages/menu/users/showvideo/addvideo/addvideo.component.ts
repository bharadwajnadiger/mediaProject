import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VideosService } from 'src/app/core/services/videos.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/core/services/common-services/alert.service';

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.scss']
})
export class AddvideoComponent implements OnInit, OnDestroy {
  addVideoForm: FormGroup;
  subscription: Subscription;
  routeResponse: any;
  title: string;
 
 // filepond starts
 @ViewChild('myPond') myPond: any;

 pondOptions = {
   class: 'my-filepond',
   labelIdle: 'Add thumbnail image here',
   acceptedFileTypes: 'image/jpeg, image/png'
 }

 pondFiles = [
 ]

 pondHandleInit() {
   console.log('FilePond has initialised', this.myPond);
 }

 pondHandleAddFile(event: any) {
   console.log('A file was added', event);
   
   // const file = event.target.files[0];
   // this.addVideoForm.get('video').setValue( event.file);
  
 }
 // ilepond ends

  constructor(private formBuilder: FormBuilder,
    private videoService: VideosService,
    private alertService: AlertService,
    private router: Router,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute) {
    this.addVideoForm = this.formBuilder.group({
      name: [, [Validators.required]],
      title: [, [Validators.required]],
      language: [, [Validators.required]],
      video: [, [Validators.required]],
      userid: [],
      published: [],
      feedback: []
    })
    this.route.params.subscribe(response => {
      this.routeResponse = response.type;
      if (this.routeResponse) {
        if (this.routeResponse == "add") {
          this.title = "Add video";
        }
        else if (this.routeResponse == "edit") {
          this.title = "Edit video";
          this.route.queryParams.subscribe(response => {
            if (response.name) {
              this.addVideoForm.patchValue(response);
            
            }
            else {
              this.router.navigate(['/menu/users/videolibrary']);
            }
          })
        }
        else {
          this.router.navigate(['/menu/users/videolibrary']);
        }
      }
      else {
        this.router.navigate(['/menu/users/videolibrary']);
      }
    })



  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.addVideoForm.get('video').setValue(file);
    }
  }

  ngOnInit(): void {
  }

 

 

  onSubmit() {
    if (this.addVideoForm.valid) {
      let userDetails = JSON.parse(localStorage.getItem("userDetails"));
      if (userDetails._id) {
        this.addVideoForm.value.userid = userDetails._id;
        if (this.routeResponse === "add") {
          this.subscription = this.videoService.addVideo(this.addVideoForm.value).subscribe(response => {
            this.alertService.success("Successfully Added", "top-center", 3);
            this.router.navigate(['/menu/users/videolibrary']);
          }, error => {
            this.alertService.error("something went wrong, please try again", "top-center", 3);
          })
        }
        if (this.routeResponse === "edit") {
          this.subscription = this.videoService.editVideo(this.addVideoForm.value).subscribe(response => {
            this.router.navigate(['/menu/users/videolibrary']);
          }, error => {
            this.alertService.error("something went wrong, please try again", "top-center", 3);
          })
        }
      }
      else {
        this.router.navigate(['/menu/users/videolibrary']);
      }


    }
    else {
      if (!this.addVideoForm.get("video").valid) {
        this.alertService.error("choose video file to upload", "top-center", 3);
      }
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

  }

}
