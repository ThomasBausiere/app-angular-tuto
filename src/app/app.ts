import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AaExercice } from './components/aa-exercice/aa-exercice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AaExercice],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Repo_exo_angular_M2I');
}
