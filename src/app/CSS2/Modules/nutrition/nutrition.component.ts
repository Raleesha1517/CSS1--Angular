import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css']
})
export class NutritionComponent {
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
}
