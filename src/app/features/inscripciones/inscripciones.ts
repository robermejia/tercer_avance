import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inscripciones',
  imports: [],
  templateUrl: './inscripciones.html',
  styleUrl: './inscripciones.css'
})
export class Inscripciones implements OnInit {
  // MockAPI base URL for inscripciones
  private baseUrl = 'https://68a42ed2c123272fb9b1aaeb.mockapi.io/api/v1';
  data: any[] = [];
  isLoading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Replace 'inscripciones' path or baseUrl manually when ready
    this.http.get<any[]>(`${this.baseUrl}/inscripciones`).subscribe(resp => {
      this.data = resp;
      this.isLoading = false;
    }, _err => {
      this.isLoading = false;
    });
  }
}
