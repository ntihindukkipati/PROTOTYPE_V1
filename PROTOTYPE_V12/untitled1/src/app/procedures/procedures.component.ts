import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
export interface DATA {
  category: string;
  code: string;
  type: string;
  description: string;
}

const PROCEDURE_DATA: DATA[] = [
  {code: 'D1110', category: 'PREVENTIVE', type: 'CLEANING', description: 'ADULT PROPHYLAXIS'},
  {code: 'D2391', category: 'RESTORATION', type: 'COMPOSITE FILLING', description: '1 SURFACE COMPOSITE FILLING'},
  {code: 'D1351', category: 'PREVENTIVE', type: 'SEALANTS', description: 'SEALANT PER TOOTH'},
  {code: 'D2950', category: 'RESTORATION', type: 'CROWN', description: 'CORE BUILD UP'},
  {code: 'D6010', category: 'IMPLANTS', type: 'IMPLANT PLACEMENT', description: 'IMPLANT'},
];
@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.css']
})
export class ProceduresComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['code', 'category', 'type', 'description'];
  dataSource = new MatTableDataSource(PROCEDURE_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
  }

}
