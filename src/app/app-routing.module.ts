import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdviceComponent } from './advice/advice.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch:'full'},
  {path:'inicio', component:HomeComponent },
  {path:'registrar', component:RegisterComponent },
  {path:'información', component: AboutComponent },
  {path:'noticias', component: NewsComponent },
  {path:'consejos', component: AdviceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
