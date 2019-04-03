import { Component, OnInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  phone = 555;

  constructor() { }

  ngOnInit() {

  }

  display(result) {
    this.phone = result;
  }

}
