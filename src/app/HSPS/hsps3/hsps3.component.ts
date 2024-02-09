import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-hsps3',
  templateUrl: './hsps3.component.html',
  styleUrls: ['./hsps3.component.css']
})
export class Hsps3Component {

  DownloadPDF() {
    const doc = new jsPDF();
  
    const cards = document.querySelectorAll('.card');
    let tableData: string[][] = [];
  
    cards.forEach((card, index) => {
      const titleElement = card.querySelector('h3');
      const authorElement = card.querySelector('h4');
  
      // Check if both title and author elements exist
      if (titleElement && authorElement) {
        const title = titleElement.innerText;
        const author = authorElement.innerText;
  
        tableData.push([`${title}`, author]);
      }
    });
  
    autoTable(doc,{
      head: [['Title', 'Author']],
      body: tableData,
      startY: 20, // Y-position to start the table
    });
  
    doc.save('HSPS3.pdf');
  }
  
  
}
