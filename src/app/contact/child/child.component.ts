import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() numberChange = new EventEmitter();

  numero = 'Holla!';

  constructor() { }

  ngOnInit() {
  }

  valueChanged() {
    this.numberChange.emit(this.numero);
  }

}
