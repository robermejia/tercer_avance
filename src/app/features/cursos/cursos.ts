import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosAPI } from './cursos-api';
import { Course, Student } from '../../../shared/entities'; // o desde donde lo crees
import { StudentsTable } from '../../students-table/students-table';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos.html',
  styleUrls: ['./cursos.css']
})
export class Cursos implements OnInit {
  deleteStudent($event: Student) {
    throw new Error('Method not implemented.');
  }
  cursos: Course[] = [];
  isLoading = true;
  alumnos: Student[] = [];


  constructor(private cursosApi: CursosAPI) { }

  ngOnInit(): void {
    this.cursosApi.getCursos().subscribe(cursos => {
      this.cursos = cursos;
      this.isLoading = false;
    });
  }
}
