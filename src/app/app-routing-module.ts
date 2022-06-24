import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DisplayAccountComponent } from './display-account/display-account.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/create-account', pathMatch: 'full' },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'display-account', component: DisplayAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
 