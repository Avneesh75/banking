import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountComponent } from './account/account.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { ViewComponent } from './view/view.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ChequeComponent } from './cheque/cheque.component';
import { LoanComponent } from './loan/loan.component';
import { ViewsavingComponent } from './viewsaving/viewsaving.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccountComponent,
    DepositComponent,
    WithdrawComponent,
    ViewComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    ChequeComponent,
    LoanComponent,
    ViewsavingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
