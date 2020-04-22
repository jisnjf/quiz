import { Component,  } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = '';
  player= '';  

  SaveName() {
    this.player= this.player;
    console.log(this.player)
  }
  constructor()
{

}  
}
