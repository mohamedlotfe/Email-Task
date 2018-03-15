import { Component, OnInit } from '@angular/core';
import {
  Input,
  Output,
  EventEmitter, AfterViewInit
} from '@angular/core';
import { Email } from '../../assets/models/email';
import { HomeEmailService } from './home-email.service';

@Component({
  selector: 'app-email-card',
  templateUrl: './email-card.component.html',
  styleUrls: ['./home-email.component.css']
})
export class EmailCardComponent implements OnInit {

  hasImage: boolean;

  @Input() email: Email;
  @Output() selected = new EventEmitter<Email>();

  constructor(private _service: HomeEmailService) { }

  ngOnInit() {
    if (this.email.sender_img_url !== '' && this.email.sender_img_url != null) {
      this.hasImage = true;
    } else {
      this.hasImage = false;
    }
  }
  showEmail(id) {
    this.selected.emit(this.email);
    const cards = document.getElementsByClassName('email-item');
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove('email-item-selected');
    }
    document.getElementById('Card-' + id).classList.add('email-item-selected');
  }

}
