import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.css']
})
export class TabbarComponent {
  
  @Input() sideNavStatus : boolean = false;


  list = [
    {
      number:'1',
      name: 'CSS 1',
      icon: 'assets/icons2/cs1.png',
      link: '/modules'
    },
    // {
    //   number:'2',
    //   name: 'CSS 2',
    //   icon: 'assets/icons2/cs2.png',
    //   link: '/https://ac-css2.netlify.app/css2home'
    // },
    // {
    //   number:'3',
    //   name: 'Community Medicine',
    //   icon: 'assets/icons2/cm.png',
    //   link: '/commedhome'
    // },
    
    
    


  ]

}
