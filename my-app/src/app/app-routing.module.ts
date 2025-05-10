import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosPageComponent } from './videos-page/videos-page.component';
import { VideosLayoutComponent } from './videos-layout/videos-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [
  { path: 'videos', component: VideosPageComponent, }, // Route for /videos
  { path: 'admin', component: AdminPageComponent,},
  { path: '', component: HomePageComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
