import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Certificate } from '../_models/certificate';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  readonly apiUrl = 'http://localhost:3000/api/certificates/';

  constructor(private http: HttpClient) {}

  getCertificates(): Observable<Certificate[]> {
    console.log('testtttt')
    return this.http.get<Certificate[]>(this.apiUrl);
  }
}