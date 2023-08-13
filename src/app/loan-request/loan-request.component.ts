import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanInfoService } from './loan-info.service';

@Component({
  selector: 'loan-request-registration',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.scss']
})
export class LoanRequestComponent {

  public loanRequestForm: FormGroup;
  public errorMessage: string=""
  response: any = null;

  constructor(private router: Router,
              private loanInfoService: LoanInfoService) {
    this.loanRequestForm = this.createFormGroup();
  }

  public onSubmitRegisterForm() {
    const loanRequestObj = this.loanRequestForm.getRawValue();
    this.response = null;
    this.errorMessage = "";
    this.loanInfoService.getLoanRequestDecision(loanRequestObj).subscribe({
      next: value => {
        this.response = value;

      },
      error: error => {
        const errMsg = error.error.message;
        this.errorMessage = errMsg;
      },
      complete: () => console.log('Complete!')
    });
  }

  private createFormGroup() : FormGroup {
    const groups: any = {};
    groups['personalCode'] = new FormControl('',[Validators.required]);
    groups['loanAmount'] = new FormControl('',[Validators.required]);
    groups['loanPeriod'] = new FormControl('',[Validators.required]);
    return new FormGroup(groups);
  }
}
