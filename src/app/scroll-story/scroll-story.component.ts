import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scroll-story',
  templateUrl: './scroll-story.component.html',
  styleUrls: ['./scroll-story.component.css']
})
export class ScrollStoryComponent implements OnInit {
  @Input() selection: string;
  @Input() subtitle: string;
  constructor() { }

  ngOnInit() {
  }

}