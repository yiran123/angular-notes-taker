import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Note } from '../../interface/note.interface';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-input-content',
  templateUrl: './input-content.component.html',
  styleUrls: ['./input-content.component.css'],
})
export class InputContentComponent implements OnInit {

  constructor(private fb: FormBuilder, private notesService: NotesService) {}
  form: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [''],
      content: [''],
    });
    this.notesService.selectedNote$.subscribe((note: Note) => {
      this.form.get('title').setValue(note.title);
      this.form.get('content').setValue(note.content);
    });
  }
  onSubmit() {
    //console.log(this.form.value);
    this.notesService.createNote(this.form.value);
    this.form.reset();
  }
  onRevert() {
    // this.form.reset();
  }
}
