import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../authentication.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {

  public userLoginForm: FormGroup;
  public errorMessage:string ="";
  constructor(private router: Router,
    private authService: AuthService) {
    this.userLoginForm = this.createFormGroup();
  }

  public onSubmitLoginForm() {
    const authObj = this.userLoginForm.getRawValue();
    this.authService.login(authObj).subscribe({
      next: value => {
        this.errorMessage ="";
        this.navigateUserToPage(value);
      },
      error: error => {
        console.log(error);
        this.errorMessage = "Incorrect Login Credentials"
      },
      complete: () => console.log('Complete!')
    });
  }

  private createFormGroup(): FormGroup {
    const groups: any = {};
    groups['username'] = new FormControl('', [Validators.required]);
    groups['password'] = new FormControl('', [Validators.required]);
    return new FormGroup(groups);
  }

  private navigateUserToPage(value: any) {
    this.router.navigateByUrl("/loanRequestPage");
  }
}
