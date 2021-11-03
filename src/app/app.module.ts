import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AdviceComponent } from './advice/advice.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { ActivitiesComponent } from './activities/activities.component';
import { DailyComponent } from './daily/daily.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    AdviceComponent,
    AboutComponent,
    NewsComponent,
    ActivitiesComponent,
    DailyComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FullCalendarModule // register FullCalendar with you app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
