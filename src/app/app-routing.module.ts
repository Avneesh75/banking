import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountComponent } from './account/account.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { ViewComponent } from './view/view.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ChequeComponent } from './cheque/cheque.component';
import { LoanComponent } from './loan/loan.component';
import { ViewsavingComponent } from './viewsaving/viewsaving.component';

const routes: Routes = [
  {path:'Navbar',component:NavbarComponent},
  {path:'Account',component:AccountComponent},
  {path:'Deposit',component:DepositComponent},
  {path:'Withdraw',component:WithdrawComponent},
  {path:'View',component:ViewComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Profile',component:ProfileComponent},
  {path:'Cheque',component:ChequeComponent},
  {path:'Loan',component:LoanComponent},
  {path:'Viewsaving',component:ViewsavingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
