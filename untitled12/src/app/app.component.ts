
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';

export interface DATA {
  category: string;
  code: string;
  type: string;
  description: string;
}

/*const PROCEDURE_DATA: DATA[] = [
  {ID: 'D1110', category: 'PREVENTIVE', type: 'CLEANING', description: 'ADULT PROPHYLAXIS'},
  {ID: 'D2391', category: 'RESTORATION', type: 'COMPOSITE FILLING', description: '1 SURFACE COMPOSITE FILLING'},
  {ID: 'D1351', category: 'PREVENTIVE', type: 'SEALANTS', description: 'SEALANT PER TOOTH'},
  {ID: 'D2950', category: 'RESTORATION', type: 'CROWN', description: 'CORE BUILD UP'},
  {ID: 'D6010', category: 'IMPLANTS', type: 'IMPLANT PLACEMENT', description: 'IMPLANT'},
];*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 /* displayedColumns: string[] = ['code', 'category', 'type', 'description'];
  dataSource = new MatTableDataSource(PROCEDURE_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();*/
 // on()
// {
 //   this
 // }
}
