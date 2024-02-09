import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-reproductive',
  templateUrl: './reproductive.component.html',
  styleUrls: ['./reproductive.component.css']
})
export class ReproductiveComponent implements OnInit {
  ngOnInit(): void {
  
  }

  searchTable() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput") as HTMLInputElement;

    // Check if the input element exists and ensure its type
    if (input) {
        filter = input.value.toUpperCase();
        table = document.getElementById("test");

        // Check if the table element exists
        if (table) {
            tr = table.getElementsByTagName("tr");

            // Loop through all table rows, hide those that don't match the search query
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[1]; // Index 1 for the second column (Name column)
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }
    }
}

  Alert(){
    alert("Not Uploaded Yet!.If You Have Send it")
  }

online(){
  alert("Online Please send if have SS")
}

upload(){
  alert("Will Upload Soon")
}

CTG(){
  alert("This is CTG Cource")
}


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
