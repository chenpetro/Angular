import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { App } from './app';
import { MainLayout } from './shared/main-layout/main-layout.component';
import { MainPage } from './main-page/main-page.component';
import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    App,            // import standalone component
    MainLayout,      // import standalone component if used directly here
    MainPage
  ],
  bootstrap: [App] // bootstrap the standalone root component
})
export class AppModule {}