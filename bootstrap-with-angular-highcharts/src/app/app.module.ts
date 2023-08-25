import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartModule } from 'angular-highcharts';
import { BasicTutorialComponent } from './basic-tutorial/basic-tutorial.component';
import { GridLayoutTutorialComponent } from './grid-layout-tutorial/grid-layout-tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicTutorialComponent,
    GridLayoutTutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
