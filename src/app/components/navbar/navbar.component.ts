import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    
    const left = document.getElementById("navbar-menu").style.left;
    if(left!=="0" && left!=="0px") {
      document.getElementById("navbar-menu").style.left= "0";;
      document.getElementById("navbar-toggle").setAttribute('class', 'fa fa-times fa-2x');
    }else{
      document.getElementById("navbar-menu").style.left="100%";
      document.getElementById("navbar-toggle").setAttribute('class', 'fa fa-bars fa-2x');
    }
  }

}
