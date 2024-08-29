import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resume } from '../_models/Resume';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  private apiUrl = 'http://localhost:3000/api/resume'; 

  constructor(private http: HttpClient) {}

  getResume(): Observable<Resume> {
    return this.http.get<Resume>(this.apiUrl);
  }
}
