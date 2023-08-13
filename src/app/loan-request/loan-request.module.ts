import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanRequestComponent } from './loan-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoanRequestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoanRequestModule { }
