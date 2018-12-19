import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WeightFormComponent } from './components/weight-form/weight-form.component';
import { WeightsListComponent } from './components/weights-list/weights-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeightFormComponent,
    WeightsListComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
