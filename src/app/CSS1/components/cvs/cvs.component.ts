import { Component } from '@angular/core';

@Component({
  selector: 'app-cvs',
  templateUrl: './cvs.component.html',
  styleUrls: ['./cvs.component.css']
})
export class CvsComponent {

  constructor(){}

  ngOnInit(): void{

  }

todo(){
  alert("Sorry.This Bat-Note is Not uploaded yet..")
}

searchText: string = '';
  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    //console.log('this.searchText');

  }
  
}

export class CardioComponent {
  data = [
    {
      word: 'Atherosclerosis and MI',
      pdf: 'Atherosclerosis and MI',
      pdfUrl: 'https://drive.google.com/uc?export=download&id=1tHbrtDkvni98iAXd9M0jDpR_NFK6GyA-'
    },
    {
      word: 'Cardiac investigations',
      pdf: 'Cardiac investigations',
      pdfUrl: 'https://drive.google.com/uc?export=download&id=1LbdI4BX05dJCc0i-XHO1AUHLIA18K7YC'
    },
    {
      word: 'Clinical presentation and management of IHD',
      pdf: 'Clinical presentation and management of IHD',
      pdfUrl: 'https://drive.google.com/uc?export=download&id=1MwCfCLblACmGh-lbjgapLQ__6-nL-SBL'
    },
    {
      word: 'Rheumatic fever',
      pdf: 'Rheumatic fever',
      pdfUrl: 'https://drive.google.com/uc?export=download&id=1c8n4MygDbtMNdTTKyBCewl1l5ola05tS'
    },
    {
      word: 'Clinical aspects of VHD and management 1',
      pdf: 'Clinical aspects of VHD and management',
      pdfUrl: 'https://drive.google.com/uc?export=download&id=1miPbzi8mN-6UHiUAt'
    }
  ]
}
