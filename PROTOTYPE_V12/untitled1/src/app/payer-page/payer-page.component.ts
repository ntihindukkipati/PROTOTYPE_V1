import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';


export interface DATA1 {
  Payer_name: string;
  ID: string;
  PHONE: string;
  CLAIM_ADDRESS: string;
  status: boolean;
  plans: string;
}
const PAYER_DATA: DATA1[] = [
  {ID: '1110', Payer_name: 'ATOM', PHONE: '888-225-2323', CLAIM_ADDRESS: 'pobox 2015', status : true, plans: '' },
  // tslint:disable-next-line:max-line-length
  {ID: '2391', Payer_name: 'RESTORATION', PHONE: '888-225-2322', CLAIM_ADDRESS: 'SURFACE COMPOSITE FILLING station', status : true, plans: ''},
  {ID: '1351', Payer_name: 'PREVENTIVE', PHONE: '888-225-2326', CLAIM_ADDRESS: 'SEALANT ', status : true, plans: ''},
  {ID: '2950', Payer_name: 'RESTORATION', PHONE: '888-225-2343', CLAIM_ADDRESS: 'CORE BUILD store', status : true, plans: ''},
  {ID: '6010', Payer_name: 'IMPLANTS', PHONE: '888-225-2320', CLAIM_ADDRESS: 'IMPLANT store', status : true, plans: ''},
];
@Component({
  selector: 'app-payer-page',
  templateUrl: './payer-page.component.html',
  styleUrls: ['./payer-page.component.css']
})
export class PayerPageComponent implements OnInit {

  constructor() { }
  displayedColumnse: string[] = ['Payer_name', 'ID', 'PHONE', 'CLAIM_ADDRESS', 'status', 'plans'];
  dataSources = new MatTableDataSource(PAYER_DATA);

  applyFilter(filterValue: string) {
    this.dataSources.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
  }

}
