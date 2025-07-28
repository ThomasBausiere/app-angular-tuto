import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AaExercice } from './components/aa-exercice/aa-exercice';
import { AbExercice } from './components/ab-exercice/ab-exercice';

export const routes: Routes = [
    {path:"", component:Home},
    {path:"exo1", component:AaExercice},
    {path:"exo2", component:AbExercice}
];
