import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseCharacterComponent } from './character/base-character.component';
import { LandingComponent } from './landing page/landing.component';
import { FormComponent } from './components/form/form.component';
import { BaseViewComponent } from './character/base-view/base-view.component';
import { StoryDetailComponent } from './components/story-detail/story-detail.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'log/:character',
    component: BaseCharacterComponent,
    children: [
      { path: '', component: BaseViewComponent },
      { path: 'new', component: FormComponent },
      { path: ':story', component: StoryDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
