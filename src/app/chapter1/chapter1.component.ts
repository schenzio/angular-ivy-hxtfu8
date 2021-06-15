import { Component, OnInit, Input } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-chapter1',
  templateUrl: './chapter1.component.html',
  styleUrls: ['./chapter1.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        display: 'block'
      })),
      state('closed', style({
        display: 'none'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ]
   
})
export class Chapter1Component implements OnInit {
  @Input() selection: string;
  
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  constructor() { }

  ngOnInit() {
  }

}