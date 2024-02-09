import { Component } from '@angular/core';

@Component({
  selector: 'app-medicopapers',
  templateUrl: './medicopapers.component.html',
  styleUrls: ['./medicopapers.component.css']
})
export class MedicopapersComponent {
  data = [

    {
      number: '1',
      name:'MCQ - 1',
      seq: 'https://docs.google.com/document/d/1gbm1dZR3kqdTgN8_FSnRrhYnhAK-V5Wn/edit?usp=drive_link&ouid=107007707675850420095&rtpof=true&sd=true'
    },
    {
      number: '2',
      name:'MCQ - 2',
      seq: 'https://docs.google.com/document/d/1GkVmT4XH0ttdt3VMxvoi0nmmHhKVlJ5K/edit?usp=drive_link&ouid=107007707675850420095&rtpof=true&sd=true'
    },
    {
      number: '3',
      name:'MCQ - 3',
      seq: 'https://docs.google.com/document/d/1zIEic7XUY220iFZV9uEVDZr1DIDzSxC5/edit?usp=drive_link&ouid=107007707675850420095&rtpof=true&sd=true'
    },
    {
      number: '4',
      name:'MCQ - 4',
      seq: 'https://docs.google.com/document/d/1RUJUGXRirVJfhvmWjiKIWtLI9mdJl6TU/edit?usp=drive_link&ouid=107007707675850420095&rtpof=true&sd=true'
    },
    {
      number: '5',
      name:'MCQ - 5',
      seq: 'https://docs.google.com/document/d/1AmzZUWX_cA3-P0EGAZa6g_S1yOLmVnMh/edit?usp=drive_link&ouid=107007707675850420095&rtpof=true&sd=true'
    },

    {
      number: '6',
      name:'SEQ - Catagorized',
      seq: 'https://drive.google.com/file/d/1nbl5G8_HpXos0nxipIzlUkdDUFRWJtvP/view?usp=drive_link'
    },

    {
      number: '7',
      name:'2017 ML Paper',
      seq: 'https://drive.google.com/file/d/100dqViZA6jx_8lsz4oEJu0PDpxD1-HXJ/view?usp=drive_link'
    },

    {
      number: '8',
      name:'MCQ New',
      seq: 'https://docs.google.com/file/d/1pbUOnYrL54sg-d7h6g8gPdfr9sFvYSa5/edit?usp=docslist_api&filetype=msword'
    },


  ]
}
