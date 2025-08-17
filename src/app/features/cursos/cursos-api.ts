import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../../../shared/entities';
import { Observable } from 'rxjs';
import { DbRoutes } from '../../../shared/enums/enums';

@Injectable({
  providedIn: 'root'
})
export class CursosAPI {
  baseUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getCursos(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/${DbRoutes.Courses}`);
  }
}
