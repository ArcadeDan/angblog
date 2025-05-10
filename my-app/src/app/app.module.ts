import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCardModule } from '@angular/material/card';
import { CreateHeaderComponent } from './create-header/create-header.component';
import { CreateFooterComponent } from './create-footer/create-footer.component';
import { VideosPageComponent } from './videos-page/videos-page.component';
import { VideosLayoutComponent } from './videos-layout/videos-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateDarkmodeButtonComponent } from './create-darkmode-button/create-darkmode-button.component'; // Import MatCardModule
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CreateHeaderComponent,
    CreateFooterComponent,
    VideosPageComponent,
    VideosLayoutComponent,
    HomePageComponent,
    CreateDarkmodeButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
