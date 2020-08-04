import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherComponent } from './weather/weather.component';
import { CurrencyComponent } from './currency/currency.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { ProfileReactiveComponent } from './profile-reactive/profile-reactive.component';
// import {HerodetailComponent} from './hero-detail/hero-detail.component';







const routes: Routes = [
  { path: 'weather', component: WeatherComponent },
  { path: 'currency', component: CurrencyComponent },
  { path: 'radiobutton', component: RadiobuttonComponent},
  { path: 'profile-reactive', component: ProfileReactiveComponent, },
  // { path: 'hero-detail', component: HerodetailComponent, },

  // { path: '', pathMatch: 'full', redirectTo: 'profile' },




];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
