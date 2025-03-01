import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseCharacterComponent } from './character/base-character.component';
import { LandingComponent } from './landing page/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'log/:character', component: BaseCharacterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
