import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book';
  darkMode: boolean = false;

  toggleDarkMode=()=> {
    this.darkMode = !this.darkMode;
  }
}