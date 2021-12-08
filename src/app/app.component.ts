import { Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './interface/note.interface';
import { NotesService } from './services/notes.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  notelist$: Observable<Note[]>;
  constructor(private noteService: NotesService) {}
  ngOnInit(): void {
    this.notelist$ = this.noteService.notesList$;
  }
}
