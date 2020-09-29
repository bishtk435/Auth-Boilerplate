import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {
  @Input() type: string;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() lablename: string;
  @Input() iconname: string;

  constructor() { }

  ngOnInit(): void {
  }

}
