import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dengine_frontend';
  hideMainButton:boolean = false;
  constructor(private router: Router,
    private authService: AuthService) {
      this.authService.isLoggedIn().subscribe({
        next:  value => {
              this.hideMainButton = value;

        }
      })
  }

  public goToLoginPage() {
    this.router.navigateByUrl("/userLoginForm");
  }

  public goToRegisterPage() {
    this.router.navigateByUrl("/loanRequestPage");
  }

  public logout() {
    this.authService.logout();
    this.router.navigateByUrl("/userLoginForm");
  }

}
