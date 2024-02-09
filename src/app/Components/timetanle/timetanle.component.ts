import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-timetanle',
  templateUrl: './timetanle.component.html',
  styleUrls: ['./timetanle.component.css']
})
export class TimetanleComponent implements OnInit {
  ngOnInit(): void {
  }


  DownloadPDF(): void {
    const doc = new jsPDF();
    const content = document.getElementById('test') as HTMLTableElement;

    if (content) {
      doc.text('BAT Topics', 10, 10); // Title for the PDF
      autoTable(doc,{ html: content });
      doc.save('lecture_topics.pdf');
    } else {
      console.error('Table element not found');
    }
  }

  getDayOfWeek(dateString: string): string {
    const date = new Date(dateString);
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    return dayOfWeek;
  }
  
  lectures = [
   
    {
      time: '10:00 AM',
      date: '2023-11-28', // YYYY-MM-DD format
      lecture: 'CNS Infections',
      Person: 'Sasith',
    },
    {
      time: '10:00 AM',
      date: '2023-11-29', // YYYY-MM-DD format
      lecture: 'Intracranial SOL',
      Person: 'Deminda',
    },
    {
      time: '10:00 AM',
      date: '2023-11-30', // YYYY-MM-DD format
      lecture: 'Headaches and Non compressive myelopathies',
      Person: 'Demika',
    },
    {
      time: '10:00 AM',
      date: '2023-12-04', // YYYY-MM-DD format
      lecture: 'Parkinsons Disease',
      Person: 'Nadith',
    },
    {
      time: '10:00 AM',
      date: '2023-12-05', // YYYY-MM-DD format
      lecture: 'Seizures and Epilepsy',
      Person: 'Arunaja',
    },
    {
      time: '10:00 AM',
      date: '2023-12-06', // YYYY-MM-DD format
      lecture: 'Strokes and TIAs',
      Person: 'Chamika',
    },
    {
      time: '10:00 AM',
      date: '2023-12-07', // YYYY-MM-DD format
      lecture: 'SIH',
      Person: '',
    },
    {
      time: '10:00 AM',
      date: '2023-12-08', // YYYY-MM-DD format
      lecture: 'AFP and Disordores of NMJ',
      Person: 'Raleesha',
    },
    {
      time: '10:00 AM',
      date: '2023-12-11', // YYYY-MM-DD format
      lecture: 'RA and Spondyloarthritis',
      Person: 'Arunaja',
    },
    {
      time: '10:00 AM',
      date: '2023-12-12', // YYYY-MM-DD format
      lecture: 'Osteoarthitis and Osteoporosis',
      Person: '',
    },
    {
      time: '10:00 AM',
      date: '2023-12-13', // YYYY-MM-DD format
      lecture: 'SLE',
      Person: '',
    },
    {
      time: '10:00 AM',
      date: '2023-12-14', // YYYY-MM-DD format
      lecture: 'SS and Vasculitis',
      Person: '',
    },
    {
      time: '10:00 AM',
      date: '2023-12-15', // YYYY-MM-DD format
      lecture: 'Depressive disorder and Bipolar',
      Person: '',
    },
    {
      time: '10:00 AM',
      date: '2023-12-18', // YYYY-MM-DD format
      lecture: 'Schizophrenia',
      Person: 'Dinujaya',
    },
    {
      time: '10:00 AM',
      date: '2023-12-19', // YYYY-MM-DD format
      lecture: 'Child Psychiatry',
      Person: 'Poojanie',
    },
    {
      time: '10:00 AM',
      date: '2023-12-20', // YYYY-MM-DD format
      lecture: 'Dementia and Delerium',
      Person: '',
    },
    {
      time: '10:00 AM',
      date: '2023-12-21', // YYYY-MM-DD format
      lecture: 'Acutely disturbed patients',
      Person: '',
    },
    
  ]
  
  daysLeft = 0;
  daysLeftIndex = -1;

 showDaysLeft(lectureDate: string, index: number): void {
    const currentDate = new Date().getTime();
    const batDate = new Date(lectureDate).getTime();
    const timeDiff = batDate - currentDate;
    this.daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    this.daysLeftIndex = index;
  }

  hideDaysLeft(index: number): void {
    this.daysLeft = 0;
    this.daysLeftIndex = -1;
  }
}
