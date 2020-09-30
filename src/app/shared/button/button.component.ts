import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() btnname: string;
  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

}

