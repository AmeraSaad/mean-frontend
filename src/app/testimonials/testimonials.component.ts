import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Daniel Lewis',
      description: 'Lorem ipsum dolor sit amet, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
      imageURL: 'images/avatar-1.png'
    },
    {
      name: 'Anna Smith',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageURL: 'images/avatar-2.png'
    }
  ];
}
