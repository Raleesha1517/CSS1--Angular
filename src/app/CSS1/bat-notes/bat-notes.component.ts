import { Component } from '@angular/core';

@Component({
  selector: 'app-bat-notes',
  templateUrl: './bat-notes.component.html',
  styleUrls: ['./bat-notes.component.css']
})
export class BatNotesComponent {
  [x: string]: any;

  showMe: boolean= true;
  ngOnInit(){}
  
  toogleTag(){
  this.showMe=!this.showMe
  }
  
}
