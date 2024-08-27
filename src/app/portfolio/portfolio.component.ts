import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { Project } from '../_models/Project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Richard  - Portfolio');
  }

  projects:Project[] = [
    {id:0,name:'Project 1',summary:'Test Description',description:'',projectLink:'',tags:['Angular','Node.js'],pictures:[]},
    {id:1,name:'Project 2',summary:'Test Description',description:'',projectLink:'',tags:['Angular','Node.js'],pictures:[]},
    {id:2,name:'Project 3',summary:'Test Description',description:'',projectLink:'',tags:['Angular','Node.js'],pictures:[]},
    {id:3,name:'Project 4',summary:'Test Description',description:'',projectLink:'',tags:['Angular','Node.js'],pictures:[]}
  ]
}
