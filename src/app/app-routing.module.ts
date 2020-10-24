import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [

  // path: '/dashborad', PagesRouting
  // path: 'auth', AuthRouting

  { path: '**', component: NopagefoundComponent },
  { path: '', redirectTo: '/dashborad', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
