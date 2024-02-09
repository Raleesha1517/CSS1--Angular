import { Component } from '@angular/core';

@Component({
  selector: 'app-aca-drive',
  templateUrl: './aca-drive.component.html',
  styleUrls: ['./aca-drive.component.css']
})
export class AcaDriveComponent {
  showMe: boolean= true;
  ngOnInit(){}

toogleTag(){
 this.showMe=!this.showMe
}
}
