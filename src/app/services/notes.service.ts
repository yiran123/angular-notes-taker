import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Note } from '../interface/note.interface';

@Injectable()
export class NotesService {
  dataArr: Note[] = [];
  notesList$ = new BehaviorSubject(this.dataArr);

  selectedNote$ = new BehaviorSubject<Note>({ title: '', content: '' });

  constructor() {
    if (localStorage.getItem('NoteList')) {
      this.dataArr = JSON.parse(localStorage.getItem('NoteList'));
    }
  }

  createNote(note: Note) {
    this.dataArr.push(note);
    localStorage.setItem('NoteList', JSON.stringify(this.dataArr));
    this.notesList$.next(this.dataArr);
  }
  deleteNote(index: number) {
    this.dataArr = this.dataArr.filter((val, i) => {
      return i !== index;
    });
  }
  // getNotes(): Observable<Note[]> {
  //   return this.notesList$ as Observable<Note[]>;
  // }
  // selectNote(index: number) {
  //   this.selectedNote$.next(this.dataArr[index]);
  // }
}
