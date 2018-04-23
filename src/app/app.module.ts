import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailsComponent,
    FormComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
