# InBankFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Application Navigation

username - inbank 
password - inbank@123

valid personal codes for account - 49002010965 , 49002010976, 49002010987, 49002010998 , 49002010999

1. User Login Page
   - Once user visit http://localhost:4200, user login screen can be viewed
   - Please use given username and password for logging in to the system
   - After successful login, user will be redirected to the Loan request page

 2. Loan Request Page
   - User can enter the values for specific fields in the form. Frontend validations are also added
   - Once validate the form in basic level, user can submit the loan request
   - Loan request is having errors, error will be shown in top of the form
   - If Loan request gets response, decision and approved amount will be shown under submit button
