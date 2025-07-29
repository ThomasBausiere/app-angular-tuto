import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AaExercice } from './components/aa-exercice/aa-exercice';
import { AbExercice } from './components/ab-exercice/ab-exercice';
import { AcExercice } from './components/ac-exercice/ac-exercice';

export const routes: Routes = [
    {path:"", component:Home},
    {path:"exo1", component:AaExercice},
    {path:"exo2", component:AbExercice},
    {path:"exo3", component:AcExercice}

];
