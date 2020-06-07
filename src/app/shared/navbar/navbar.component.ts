import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HostListener } from "@angular/core";
import { MatSidenav, MatDrawer } from '@angular/material/sidenav';
import { NavBarModel } from '../nav-bar.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 @Input('navBar') navBar:NavBarModel;
  @ViewChild('sidenav', { static: true}) sidenav: MatDrawer;
  mode:string="side";
  openSideNav:boolean;
  constructor() { 
    this.getScreenSize();
  }


  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        if(window.innerWidth <= 960){
          this.mode = "over";
          this.openSideNav= false;
        }
        else{
          this.mode="side";
          this.openSideNav= true;
        }
  }

  ngOnInit(): void {
    this.getScreenSize();
  }


}
