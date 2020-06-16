import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videodetails',
  templateUrl: './videodetails.component.html',
  styleUrls: ['./videodetails.component.scss']
})
export class VideodetailsComponent implements OnInit {
  routeResponse: any;
  video:any;
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(response => {
      if (response.userid) {
        this.video =response;
      }
      else {
        this.router.navigate(['/menu/users/videolibrary']);
      }
    })
  }

}
