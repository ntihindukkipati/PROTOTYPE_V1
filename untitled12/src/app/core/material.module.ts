import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatSidenavContainer} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule],
  // tslint:disable-next-line:max-line-length
  exports: [CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatSidenavContainer, MatIconModule, MatSidenavModule, MatListModule],
})
export class CustomMaterialModule { }
