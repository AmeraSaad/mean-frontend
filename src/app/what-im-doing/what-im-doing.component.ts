import { Component } from '@angular/core';

@Component({
  selector: 'app-what-im-doing',
  templateUrl: './what-im-doing.component.html',
  styleUrl: './what-im-doing.component.css'
})
export class WhatImDoingComponent {
  jobs = [
    {
      name: 'Web design',
      description: 'The most modern and high-quality design made at a professional level.',
      imageURL: 'images/icon-design.svg'
    },
    {
      name: 'Web development',
      description: 'High-quality development of sites at the professional level.',
      imageURL: 'images/icon-dev.svg'
    },
    {
      name: 'Mobile apps',
      description: 'Professional development of applications for iOS and Android.',
      imageURL: 'images/icon-app.svg'
    },
    {
      name: 'Photography',
      description: 'I make high-quality photos of any category at a professional level.',
      imageURL: 'images/icon-photo.svg'
    },
  ];
}
