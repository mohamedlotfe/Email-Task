import { Component, OnInit } from '@angular/core';
import { Email } from '../../assets/models/email';
import { HomeEmailService } from './home-email.service';

@Component({
  selector: 'app-home-email',
  templateUrl: './home-email.component.html',
  styleUrls: ['./home-email.component.css']
})
export class HomeEmailComponent implements OnInit {
  emailsList: Email[];
  tempList: Email[];
  selectedEmail: Email;
  newEmail: Boolean;
  tagName: String;
  newContent: any;
  constructor(private _service: HomeEmailService) { }

  ngOnInit() {
    this._service.getAllEmails('All',(res) => {
      this.emailsList = res;
    });
  }
  setNewEmail(newEmail) {
    this.newEmail = newEmail;
  }
  setSelectedEmail(selectedEmail) {
    this.newEmail = false;
    this.selectedEmail = selectedEmail;
  }
  filterEmails(tagName) {
    this._service.getAllEmails(tagName, (res) => {
      this.emailsList = res;
    });
  }
  setNewEmailContent(newContent) {
    this._service.setAnEmail(newContent, (res) => {
      this._service.getAllEmails('All', (res2) => {
        this.emailsList = res2;
      });
    });
    this.newEmail = false;
  }
}
