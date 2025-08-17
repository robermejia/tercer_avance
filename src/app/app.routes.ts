import { Routes } from '@angular/router';
import { Alumnos } from './features/alumnos/alumnos';
import { Navegacion } from '../shared/enums/enums';
import { ViewStudent } from './features/alumnos/view-student/view-student';



export const routes: Routes = [
    {
        path: "", component: Alumnos
    },
    {
        path: Navegacion.Alumnos,
        component: Alumnos,
    },
    {
        path: Navegacion.ViewStudent,
        component: ViewStudent,
    },
    {
        path: Navegacion.EditStudent,
        loadComponent: () => import('./features/alumnos/edit-student/edit-student').then(m => m.EditStudent)
    },

    {
        path: Navegacion.Cursos,
        loadComponent: () => import('./features/cursos/cursos').then(m => m.Cursos)
    },
    {
        path: Navegacion.Inscripciones,
        loadComponent: () => import('./features/inscripciones/inscripciones').then(m => m.Inscripciones)
    },
];

