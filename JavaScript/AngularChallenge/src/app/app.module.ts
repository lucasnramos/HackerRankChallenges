import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { RadioComponent } from './radio/radio.component';
import { RadioChangeDirective } from './radio-change.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    RadioComponent,
    RadioChangeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
