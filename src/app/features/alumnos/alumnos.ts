import { Component, inject } from '@angular/core';
import { AlumnosAPI } from './alumnos-api';
import { Student } from '../../../shared/entities';
import { CommonModule, JsonPipe } from '@angular/common';
import { StudentsTable } from "../../students-table/students-table";
import { switchMap } from 'rxjs';
import { Auth } from '../../core/auth/auth';

@Component({
  selector: 'app-alumnos',
  imports: [CommonModule, StudentsTable],
  templateUrl: './alumnos.html',
  styleUrls: ['./alumnos.css']
})
export class Alumnos {
  alumnos: Student[] = [];
  isLoading: boolean = true;
  private auth = inject(Auth);

  constructor(private alumnosApi: AlumnosAPI) { }

  ngOnInit() {
    this.getAlumnos();
  }

  getAlumnos() {
    this.isLoading = true;
    this.alumnosApi.getAlumnos().subscribe(alumnos => {
      this.alumnos = alumnos;
      this.isLoading = false;
    });
  }

  deleteStudent(student: Student) {
    console.log("Eliminando alumno", student);

    this.isLoading = true;
    this.alumnosApi.deleteAlumno(student).pipe(
      switchMap(() => this.alumnosApi.getAlumnos())
    ).subscribe(alumnos => {
      this.alumnos = alumnos;
      this.isLoading = false;
    });
  }

  get isAdmin(): boolean {
    return this.auth.isAdmin();
  }
}
}
