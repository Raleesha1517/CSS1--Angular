import { Component } from '@angular/core';

@Component({
  selector: 'app-medicobats',
  templateUrl: './medicobats.component.html',
  styleUrls: ['./medicobats.component.css']
})
export class MedicobatsComponent {

  data = [

    {
      number: '1',
      name:'Rebecca Akkas',
      seq: 'https://drive.google.com/file/d/1ql4b7amvWH-O-pj34mrpfGpxuAw03Ppq/view?usp=drive_link'
    },
    {
      number: '2',
      name:'Hand Book',
      seq: 'https://drive.google.com/file/d/1yCVHQNwaVtzL4zm9j3nB-g-TiY7-eVAj/view?usp=drive_link'
    },
    {
      number: '3',
      name:'Bat-Note 16',
      seq: 'https://drive.google.com/file/d/1VkYOIRoxzYUOQ7ISCTEkrPCbtj1D0vu0/view?usp=drive_link'
    },
    {
      number: '4',
      name:'COD Form',
      seq: 'https://drive.google.com/file/d/1LLJffKV-4d09n7i3qAaMmwc90QE7n0RD/view?usp=drive_link'
    },
  
  ]

}
