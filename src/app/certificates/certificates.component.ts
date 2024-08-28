import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Certificate } from '../_models/certificate';
import { CertificateService } from '../services/certificate.service';
@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
  certificates: Certificate[] = [];

  constructor(private certificateService: CertificateService) {}

  ngOnInit(): void {
    this.certificateService.getCertificates().subscribe((data: Certificate[]) => {
      this.certificates = data;
    });
  }
}
