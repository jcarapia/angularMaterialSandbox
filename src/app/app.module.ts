import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, 
        MatButtonModule, 
        MatSelectModule, 
        MatIconModule,
        MatInputModule,
        MatCheckboxModule,
        MatDatepickerModule,
        } from '@angular/material';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
