import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-ophthalmology',
  templateUrl: './ophthalmology.component.html',
  styleUrls: ['./ophthalmology.component.css']
})
export class OphthalmologyComponent {

  DownloadPDF() {
    const doc = new jsPDF();
  
    const cards = document.querySelectorAll('.card');
    let tableData: (string | null)[][] = [];
  
    cards.forEach((card, index) => {
      const titleElement = card.querySelector('h3');
  
      if (titleElement) {
        const title = titleElement.innerText;
  
        tableData.push([`${index + 1}. ${title}`]);
      }
    });
  
    // Create a table with only title and PDF link columns
    autoTable(doc,{
      head: [['Title']],
      body: tableData,
      theme: 'grid'
    });
  
    doc.save('Ophthalmo');
  }
  
  
}
