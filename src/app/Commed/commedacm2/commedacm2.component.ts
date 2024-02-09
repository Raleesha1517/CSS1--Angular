import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-commedacm2',
  templateUrl: './commedacm2.component.html',
  styleUrls: ['./commedacm2.component.css']
})
export class Commedacm2Component {
  DownloadPDF(): void {
    const doc = new jsPDF();
    const table = document.getElementById('test');

    if (table) {
      const rows = table.querySelectorAll('tbody > tr');
      const rowData: string[][] = [];

      rows.forEach((row) => {
        const numberCell = row.querySelector('th');
        const nameCell = row.querySelector('td:nth-child(2)');

        if (numberCell && nameCell) {
          const number = numberCell.textContent?.trim();
          const name = nameCell.textContent?.trim();

          if (number !== null && name !== null && number !== undefined && name !== undefined) {
            rowData.push([number, name]);
          }
        }
      });

      autoTable(doc,{
        head: [['Number', 'Name']],
        body: rowData,
        theme:'grid'
      });

      doc.save('lecture_topics.pdf');
    }
  }

  items = [
    { 
      number: '1',
      description: 'Introduction to ACM', 
      link: 'https://drive.google.com/file/d/1dTfcLBVEmE1jscyaNea9BRXGa2GjH1zN/view?usp=drive_link' 
    },
    { 
      number: '2',
      description: 'Introduction to DPC', 
      link: 'https://drive.google.com/file/d/15f2zO5QZJlFFTPtV_UhFqo3NqUuGj8Sv/view?usp=drive_link' 
    },
    { 
      number: '3',
      description: 'NCD Epidemiology and prevention principles', 
      link: 'https://drive.google.com/file/d/1xnOcDBpO3TDGoCoHaFYmyTb2m-27-qbm/view?usp=drive_link' 
    },
    { 
      number: '3.1',
      description: 'Principles of prevention on common infections', 
      link: 'https://drive.google.com/file/d/1qfkxEiVAGAKVKTkK-Uf-urkHuwtWGisk/view?usp=drive_link' 
    },
    { 
      number: '4',
      description: 'Epidemiology and prevention of CVD', 
      link: 'https://drive.google.com/file/d/1CFQ-MIsMjFuT8EfnmrgQnUylDPqJJcXa/view?usp=drive_link' 
    },
    { 
      number: '5',
      description: 'Epidemiology and prevention of TB', 
      link: 'https://drive.google.com/file/d/1wqOMtzrK6qv-w1YfF5veoUCXfXOff6Qg/view?usp=drive_link' 
    },
    { 
      number: '5.1',
      description: 'Occupational Lung Diseases', 
      link: 'https://drive.google.com/file/d/173uE6At80gnFNa44ctF_6BPIjWF4p9Yx/view?usp=drive_link' 
    },
    { 
      number: '6',
      description: 'Prevention and control of GI diseases', 
      link: 'https://drive.google.com/file/d/14VB0bwbRYI77OOg-zC7bzyJwwsFcUqK3/view?usp=drive_link' 
    },
    { 
      number: '7',
      description: 'Outbreak investigations in diarrhoeal diseases', 
      link: 'https://drive.google.com/file/d/1UoMruLtjljIhWDu4ta-IuhMlt9ReFDRu/view?usp=drive_link' 
    },
    { 
      number: '8',
      description: 'Introduction to surveillance', 
      link: 'https://drive.google.com/file/d/1Qh2QxOhbUwyz2FkwXaDpu_SyAVnpBmQA/view?usp=drive_link' 
    },
    { 
      number: '9',
      description: 'National Immunization Programme', 
      link: 'https://drive.google.com/file/d/18OTh2d5IOmeIN5Z3CjPXr7_cXRWZVWuB/view?usp=drive_link' 
    },
    { 
      number: '10',
      description: 'Principles of prevention & control', 
      link: 'https://drive.google.com/file/d/1DBYgxg4AykubHFG2kdLZpHogDr9FcUm_/view?usp=drive_link' 
    },
    
    
  ];

 
}
