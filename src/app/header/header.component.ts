import { Component, OnInit } from '@angular/core';
import {
  Input,
  Output,
  EventEmitter, AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Output() createEmail = new EventEmitter<boolean>();
 @Output() tagName = new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
    this.tagName.emit('All');
  }
  createOne() {
    this.createEmail.emit(true);
  }
  showAllEmail() {
    this.tagName.emit('All');
  }
  showSentEmail() {
    this.tagName.emit('Sent');
  }
  showImportantEmail() {
    this.tagName.emit('Important');
  }
}
