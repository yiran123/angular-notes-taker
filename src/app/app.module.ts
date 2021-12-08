import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ListItemComponent } from './components/list-item/list-item.component';
import { InputContentComponent } from './components/input-content/input-content.component';
import { DemoMaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotesService } from './services/notes.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent, ListItemComponent, InputContentComponent],
  bootstrap: [AppComponent],
  providers: [NotesService],
})
export class AppModule {}
