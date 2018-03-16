import { Component, OnInit } from '@angular/core';
import {
  Input,
  Output,
  EventEmitter, AfterViewInit
} from '@angular/core';
import { Email } from '../../assets/models/email';
import { HomeEmailService } from './home-email.service';

@Component({
  selector: 'app-email-content',
  templateUrl: './email-content.component.html',
  styleUrls: ['./home-email.component.css']
})
export class EmailContentComponent implements OnInit {
  @Input('email') email: Email;
  @Input('createEmail') createEmail: Boolean;

  @Output('addNewContent') addNewContent = new EventEmitter<Email>();
  temp: any;
  recievesEmailsList: any;
  newContent: String;
  reply: Boolean = false;
  constructor() { }

  ngOnInit() {
    this.recievesEmailsList = [];
  }
  TagInputChange() {
    // console.log(this.recievesEmailsList);
  }
  replyClicked() {
    this.createEmail = true;
    this.recievesEmailsList = [this.email.sender_name];
    this.reply = true;
  }
  addaddNewContent() {
    if (this.reply === true) {
      this.MoveContent('reply');
    } else if (this.reply === false) {
      this.MoveContent('send');
    }

  }
  MoveContent(status) {
    this.temp = [];
    this.temp.id = '15';
    this.temp.date = (Date.now()).toString();
    this.temp.emai_status = 'sent message';
    this.temp.email_subject = 'hello form another side' + this.temp.id;
    this.temp.sender_img_url = '';
    this.temp.email_desc = '';
    this.temp.email_tag = 'Sent';
    this.temp.email_body = this.newContent;
    this.temp.sender_name = this.recievesEmailsList[0].value;

    this.addNewContent.emit(this.temp);

    this.recievesEmailsList = [];
    this.newContent = '';
  }
}
