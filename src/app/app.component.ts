import { Component,  } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // En string der bliver brugt til at vise det navn som er blevet tastet ind.
  name = '';
  // En string som lige nu er tom, men som lytter på hvad brugeren taster i inputfeltet
  input= '';  

  SaveName() {
    //Navnet sættes til at være ligemed det som brugeren taster ind i inputfeltet.
    this.name= this.input;
    console.log(this.name)
    //Sætter variablen "input" til at være tom igen.
    //Den sættes tom fordi det ønskes, at det som står i inputfeltet bliver slettet.
    this.input="";
  }
  constructor()
{

}  
}
