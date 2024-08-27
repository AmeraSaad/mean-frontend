import { Component } from '@angular/core';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  linkedin:string='Richard hanrick';
  email:string='richard@example.com';
  phone:string='+94 772868162';
  location:string='Colombo, Sri Lanka';
  job:string='Software Engineer';
  imageURL='images/my-avatar.png';
  logoLinkedinURL='images/logo-linkedin.gif';
  logoEmailURL='images/envelope-send.gif';
  logoPhoneURL='images/telephone-call-hand.gif';
  logoLocationURL='images/location-pin.gif';
  faPhone=faPhone;
  faEnvelope=faEnvelope;
  faMapMarkerAlt=faMapMarkerAlt;
  
}
