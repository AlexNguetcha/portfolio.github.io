import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public hats;
  public activeHat = null;

  constructor() { 
    this.hats = [
      {
        name: "Front-End",
        icon: "fa fa-image",
        technos: ["Html", "Css", "Javascript", "Bootstrap", "ReactJs", "Angular"]
      },
      {
        name: "Back-End",
        icon: "fa fa-code",
        technos: ["Php", "Symfony", "Laravel", "NodeJs"]
      },
      {
        name: "Data Bases",
        icon: "fa fa-database",
        technos: ["MySql", "MongoDB"]
      },
      {
        name: "Design",
        icon: "fa fa-paint-brush",
        technos: ["Photoshop", "Illustrator"]
      },
      {
        name: "Tools",
        icon: "fa fa-wrench",
        technos: ["Terminal", "VsCode", "Git", "Docker"]
      }
    ]
    this.activeHat = this.hats[0];
  }

  ngOnInit(): void {
    window.onload = ()=>{
      this.active(this.activeHat);
    }
  }

  

  active(hat) {
    const items = document.getElementsByClassName("item");
    console.log(items);
    
    for (let index = 0; index < items.length; index++) {
      const element = items[index];
      element.setAttribute("class", "item");
      
    }
    document.getElementById(hat.name).setAttribute("class", "item item-active");
    this.activeHat = hat;
  }

}
