import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Email } from '../../assets/models/email';
import { glob } from 'glob';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class HomeEmailService {
  emailList: Email[] = [];
  mailsPool: Email[] = [
    {
      id: '1',
      emai_status: 'xxx',
      sender_name: 'Tilo Mitra',
      sender_img_url: '../../assets/img/common/tilo-avatar.png',
      email_subject: 'Hello From Toronto',
      email_desc: 'Hey, I just wanted to check in with you from Toronto. I got here earlier today.',
      email_body: 'Aliquam ac feugiat dolor. Proin mattis massa sit amet enim iaculis tincidunt. \
                    Mauris tempor mi vitae sem aliquet pharetra. Fusce in dui purus',
      date: '3:56pm, April 3, 2012',
      email_tag: 'Important'
    },
    {
      id: '2',
      emai_status: 'email-item-unread',
      sender_name: 'Tilo Mitra two',
      sender_img_url: '',
      email_subject: 'Hello From Egypt',
      email_desc: 'Hey, I just wanted to check in with you from Toronto. I got here earlier today.',
      email_body: 'Aliquam ac feugiat dolor. Proin mattis massa sit amet enim iaculis tincidunt',
      date: '2:57pm, April 9, 2017',
      email_tag: 'Inbox'
    },
    {
      id: '3',
      emai_status: 'xxx',
      sender_name: 'Tilo Mitra 2',
      sender_img_url: '../../assets/img/common/tilo-avatar.png',
      email_subject: 'Hello From Toronto Again',
      email_desc: 'Hey, I just wanted to check in with you from Toronto. I got here earlier today.',
      email_body: 'Aliquam ac feugiat dolor. Proin mattis massa sit amet enim iaculis tincidunt. \
                    Mauris tempor mi vitae sem aliquet pharetra. Fusce in dui purus',
      date: '3:56pm, April 3, 2012',
      email_tag: 'Sent'
    },
    {
      id: '4',
      emai_status: 'xxx',
      sender_name: 'Tilo Mitra 4',
      sender_img_url: '',
      email_subject: 'Hello From Toronto Again',
      email_desc: 'Hey, I just wanted to check in with you from Toronto. I got here earlier today.',
      email_body: 'Aliquam ac feugiat dolor. Proin mattis massa sit amet enim iaculis tincidunt. \
                    Mauris tempor mi vitae sem aliquet pharetra. Fusce in dui purus',
      date: '3:56pm, April 3, 2012',
      email_tag: 'Important'
    },
    {
      id: '5',
      emai_status: 'xxx',
      sender_name: 'Tilo Mitra 5',
      sender_img_url: '',
      email_subject: 'Hello From Toronto Again',
      email_desc: 'Hey, I just wanted to check in with you from Toronto. I got here earlier today.',
      email_body: 'Aliquam ac feugiat dolor. Proin mattis massa sit amet enim iaculis tincidunt. \
                    Mauris tempor mi vitae sem aliquet pharetra. Fusce in dui purus',
      date: '3:56pm, April 3, 2012',
      email_tag: 'Sent'
    }
  ];
  constructor(private http: Http) { }
  getAllEmails(tag, callback) {
    this.emailList = [];
    for (const mail in this.mailsPool) {
      if (tag === this.mailsPool[mail].email_tag || (tag === 'All' && this.mailsPool[mail].email_tag !== 'Sent')) {
        this.emailList.push(this.mailsPool[mail]);
      }
    }
    return callback(this.emailList);
  }
  setAnEmail(email, callback) {
    
    this.mailsPool.push(email);
    console.log('services', this.mailsPool);
  }
}

