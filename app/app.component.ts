
import {Component} from '@angular/core';

@Component({
  selector:'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div class="app">
  <button (click) = "handleClick(username.value)" >Change Name </button>
   
        <input [value]="name" type="text" (input)="handleInputEvent($event.target.value)">    
        <div *ngIf="name.length > 2"> Searching for ...{{name}}</div>
  </div>
  
  `
})
export class AppComponent{
tittle: string;
numberOne:number = 1;
numberTwo:number = 2;
logo: string = 'img/logo.jpg';
name: string = "";
isHappy :boolean = false;

handleClick(value : string){
 console.log(value);
}
handleInputEvent(value : string)
{
  this.name = value;
}
constructor(){
  this.tittle = 'Ultimate Angular';
}
}
