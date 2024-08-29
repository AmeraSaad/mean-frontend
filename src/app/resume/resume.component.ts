import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Resume } from '../_models/Resume';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  resume: Resume | null = null;

  constructor(private titleService: Title, private resumeService: ResumeService) {
    this.titleService.setTitle('Richard - Resume');
  }

  ngOnInit(): void {
    this.resumeService.getResume().subscribe({
      next: (data) => {
        this.resume = data;
      },
      error: (err) => {
        console.error('Error fetching resume data:', err);
      }
    });
  }
  
}
