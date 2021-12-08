import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../interface/note.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() note!: Note;

  constructor() { }

  ngOnInit() {
  }

  onSelect() {
  }

}