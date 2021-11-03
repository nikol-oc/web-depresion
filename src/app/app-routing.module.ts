import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdviceComponent } from './advice/advice.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ActivitiesComponent } from './activities/activities.component';
import { DailyComponent } from './daily/daily.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch:'full'},
  {path:'inicio', component:HomeComponent },
  {path:'ingresar', component: LoginComponent },
  {path:'registrar', component:RegisterComponent },
  {path:'información', component: AboutComponent },
  {path:'noticias', component: NewsComponent },
  {path:'consejos', component: AdviceComponent },
  {path:'actividades', component: ActivitiesComponent },
  {path:'diario', component: DailyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
