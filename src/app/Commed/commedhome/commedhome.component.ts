import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commedhome',
  templateUrl: './commedhome.component.html',
  styleUrls: ['./commedhome.component.css']
})
export class CommedhomeComponent implements OnInit{
  ngOnInit(): void {
    this.Alert();
  }


  Alert(){
    alert("Now ACM Materials Has been uploaded to the LMS.Please visit!")
  }
}
