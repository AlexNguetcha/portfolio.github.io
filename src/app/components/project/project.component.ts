import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public projects:any;

  constructor() { 
    this.projects = [
      {
        name: "Angular Portfolio",
        description: "A powerful angular portfolio without a css framework.",
        picture: "../../../assets/logos/html.svg",
        technos : ["angular", "typescript", "html", "css"],
        github: "https://github.com/AlexNguetcha/portfolio",
        link: "https://dashboard.heroku.com/apps"
      }
    ];
  }

  ngOnInit(): void {
  }

}
