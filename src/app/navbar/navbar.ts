import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Navegacion } from '../../shared/enums/enums'; // Asegúrate que la ruta es correcta
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, RouterLink, MatSnackBarModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  public Navegacion = Navegacion; // <-- Esto expone el enum a la plantilla
}