import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material";
import { RegFormComponent } from './reg-form/reg-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegNavComponent } from './reg-nav/reg-nav.component';

@NgModule({
  declarations: [
		AppComponent,
		RegFormComponent,
		RegNavComponent
  ],
  imports: [
    BrowserModule,
		BrowserAnimationsModule,
		MatInputModule,
		MatButtonModule,
		MatSelectModule,
		MatRadioModule,
		MatCardModule,
		ReactiveFormsModule,
		MatIconModule,
		MatToolbarModule,
		NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
