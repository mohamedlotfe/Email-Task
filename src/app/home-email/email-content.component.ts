import { Component, OnInit } from '@angular/core';
import {
  Input,
  Output,
  EventEmitter, AfterViewInit
} from '@angular/core';
import {Email} from '../../assets/models/email';
import { HomeEmailService } from './home-email.service';

@Component({
  selector: 'app-email-content',
  templateUrl: './email-content.component.html',
  styleUrls: ['./home-email.component.css']
})
export class EmailContentComponent implements OnInit {
  @Input('email') email: Email;
  @Input('createEmail') createEmail: Boolean;
  recievesEmailsList: any;
  checkvalid: Boolean = true;
  constructor() { }

  ngOnInit() {
    this.recievesEmailsList = [];
  }
  TagInputChange() {
    console.log(this.recievesEmailsList);
  }
  replyClicked() {
    this.createEmail = true;
    this.recievesEmailsList = [this.email.sender_name];
  }
}
