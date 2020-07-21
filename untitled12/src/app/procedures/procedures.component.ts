import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {DataSource} from '@angular/cdk/collections';
export interface DATA {
  category: string;
  code: string;
  /*type: string;*/
  description: string;
  name: string;
  units: string;
  status: boolean;
  sti: boolean;
  ada_code: string;
  icd_code: string;
  sub_category: string;
  IINPB: boolean;
  RMV: boolean;
  assistant: boolean;
  dentist: boolean;
  hygenist: boolean;
  GLC: boolean;
  RPOFU: boolean;
  URAC: boolean;
}
/*const p: any;*/

// tslint:disable-next-line:label-position no-unused-expression
/*PROCEDURE_DATA: DATA[] ;*/
/*Procedures : any;*/


@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.css']
})
export class ProceduresComponent implements OnInit, DATA {
 /* PROCEDURE_DATA: DATA[] ;*/
 /* p : DATA = new DATA();*/
  c: any;
  ProcedureForm: FormGroup;
  category: string ;
  code: string ;
  /*type: string ;*/
  description: string ;
  name: string ;
  units: string ;
  status: boolean;
  sti: boolean;
  ada_code:string ;
  icd_code: string;
  sub_category: string;
  IINPB: boolean;
  RMV: boolean;
  assistant: boolean;
  dentist: boolean;
  hygenist: boolean;
  GLC: boolean;
  RPOFU: boolean;
  URAC: boolean;
  PROCEDURE_DATA: DATA;
 /* i: number;*/
  private Procedures: [];
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) {

  }
  elep;
  edescription;
  /*
  ename;
  ecode;
  eunits;
  estatus;

  esti;
  eada_code;
  eicd_code;
  ecategory;
  esub_category;
  eIINPB;
  eRMV;
  eassistant;
  edentist;
  ehygenist;
  eGLC;
  eRPOFU;
  eURAC;*/
  displayedColumns: string[] = ['code', 'name', 'description', 'ada_code', 'sub_category'];
  // @ts-ignore
    dataSource: MatTableDataSource < Element[] > ;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.PROCEDURE_DATA.code);
    /*console.log(res.code.includes("any where in us"));*/
  }
  onClick(ele) {
    console.log(ele);
    this.elep = ele;
    console.log(this.elep.id);
    /*this.products=JSON.parse(this.json);
   this.product = this.products.find(t=>t.product_id == "4");
   console.log(this.product);*/
    this.ProcedureForm.patchValue({
      code: this.elep.code,
      category: this.elep.category,
     /* type: this.elep.type,*/
      description: this.elep.description ,
      name: this.elep.name,
      units: this.elep.units,
      status: this.elep.status,
      sti: this.elep.sti,
      ada_code: this.elep.ada_code,
      icd_code: this.elep.icd_code,
      sub_category: this.elep.sub_category,
      IINPB: this.elep.IINPB,
      RMV: this.elep.RMV,
      assistant: this.elep.assistant,
      dentist: this.elep.dentist,
      hygenist: this.elep.hygenist,
      GLC: this.elep.GLC,
      RPOFU: this.elep.RPOFU,
      URAC: this.elep.URAC
    });
    console.log('value', this.ProcedureForm.get('code').value);
    console.log('id', this.elep._id);
  /*  console.log(this.ProcedureForm.value);*/

   /* this.ecode = this.elep.code;
    this.name = this.elep.name;
    this.units = this.elep.units;
    this.status = this.elep.status;
  /!*  this.ProcedureForm.setValue({ code:this.elep.code});*!/
    this.description = this.elep.description;
*//*    this.esti = this.eelep.sti;
    this.eada_code = this.eelep.ada_code;
    this.eicd_code = this.eelep.icd_code;
    this.ecategory = this.eelep.category;
    this.esub_category = this.eelep.sub_category;
    this.eIINPB = this.eelep.IINPB;
    this.eRMV = this.eelep.RMV;
    this.eassistant = this.eelep.assistant;
    this.edentist = this.eelep.dentist;
    this.ehygenist = this.eelep.hygenist ;
    this.eGLC = this.eelep.GLC;
    this.eRPOFU = this.eelep.RPOFU;
    this.eURAC = this.eelep.URAC;*/
    /*console.log(this.elep);
    console.log(PROCEDURE_DATA[0].code);*/
  }
  ngOnInit() {
    this.ProcedureForm = this.formBuilder.group({
      'code': [null, Validators.required],
      'name': [null, Validators.required],
      'description': [null, Validators.required],
      'status': [null, Validators.required],
      'category': [null, Validators.required],
      'type': [null, Validators.required],
      'units': [null, Validators.required],
      'sti': [null, Validators.required],
      'ada_code': [null, Validators.required],
      'icd_code': [null, Validators.required],
      'sub_category': [null, Validators.required],
      'IINPB': [null, Validators.required],
      'RMV': [null, Validators.required],
      'assistant': [null, Validators.required],
      'dentist': [null, Validators.required],
      'hygenist': [null, Validators.required],
      'GLC': [null, Validators.required],
      'RPOFU': [null, Validators.required],
      'URAC': [null, Validators.required]
    });
 /*   this.c = this.api.getProcedures();
    console.log('c', this.c);*/
    this.api.getProcedures()
      .subscribe(res => {
        this.dataSource = new MatTableDataSource(res);
        console.log('response', res[0].code);
        console.log(typeof(res));
        /*p = res;*/
        this.PROCEDURE_DATA = res;
      /*  this.i = 1;*/
        // this.PROCEDURE_DATA.push(res);
        console.log('api call', this.PROCEDURE_DATA[0].code);
      }, err => {
        console.log(err);
      });

    console.log('api call data source', this.PROCEDURE_DATA[0].code);
    /*  n : this.boolean = this.dataSource.data.find('any where in us');*/
  }

    onFormSubmit(form: NgForm) {
    console.log('form', form);
    this.api.postProcedures(form)
      .subscribe(res => {
     /*   let id = res['_id'];
        this.router.navigate(['/procedures', id]);*/
      }, (err) => {
        console.log(err);
      });
    this.api.getProcedures()
        .subscribe(res => {
          this.dataSource = new MatTableDataSource(res);
          console.log('response', res[0].code);
          console.log(typeof(res));
          this.PROCEDURE_DATA = res ;
          // this.PROCEDURE_DATA.push(res);
          console.log('api call', this.PROCEDURE_DATA[0].code);
        }, err => {
          console.log(err);
        });
       }
}
/*export class MatTableDataSourc extends DataSource<any> {
  constructor(private api: ApiService) {
    super();
  }

  connect() {
    return this.api.getProcedures();
  }

  disconnect() {

  }
}*/
