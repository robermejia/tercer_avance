import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Bigtitle } from '../../shared/directives/bigtitle';
import { Auth } from '../core/auth/auth';
import { User } from '../core/auth/auth';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [Bigtitle, CommonModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css'
})
export class Toolbar {
  private auth = inject(Auth);
  private router = inject(Router);
  
  currentTitle = 'AppCoderHouse';
  currentUser: User | null = null;

  constructor() {
    this.auth.loggedUser$.subscribe(user => {
      this.currentUser = user;
    });

    // Obtener el título según la ruta actual
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.updateTitle(event.url);
    });
  }

  private updateTitle(url: string): void {
    if (url.includes('/alumnos')) {
      this.currentTitle = 'Gestión de Alumnos';
    } else if (url.includes('/cursos')) {
      this.currentTitle = 'Gestión de Cursos';
    } else if (url.includes('/inscripciones')) {
      this.currentTitle = 'Gestión de Inscripciones';
    } else if (url.includes('/usuarios')) {
      this.currentTitle = 'Gestión de Usuarios';
    } else {
      this.currentTitle = 'AppCoderHouse';
    }
  }
}
