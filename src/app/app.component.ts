import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular-idgs902';
  alumno={
    matricula:1234,
    nombre:'Mario',
    apaterno:'Lopez',
    Inscrito:2745.93,
    fechaNacimiento:new Date()
  };

  duplicarN(n:number):number{
    return n*2;
  }
}
