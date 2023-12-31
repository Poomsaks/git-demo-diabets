import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredictDashboardComponent } from './predict-dashboard/predict-dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ResultsPageComponent } from './results-page/results-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'app-home-page', component: HomePageComponent },
  { path: 'app-predict-dashboard', component: PredictDashboardComponent },
  { path: 'app-about-page', component: AboutPageComponent },
  { path: 'app-results-page', component: ResultsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
