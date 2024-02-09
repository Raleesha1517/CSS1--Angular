import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-rehablms',
  templateUrl: './rehablms.component.html',
  styleUrls: ['./rehablms.component.css']
})
export class RehablmsComponent {
  DownloadPDF(){
    var doc = new jsPDF;
    autoTable(doc, {html:"#test", theme:'grid'});
    doc.save("Repro");

  }
}
