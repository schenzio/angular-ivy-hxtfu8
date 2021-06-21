import { Component, OnInit, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-scroll-story',
  templateUrl: './scroll-story.component.html',
  styleUrls: ['./scroll-story.component.css']
})
export class ScrollStoryComponent implements OnInit {
  @Input() selection: string;
 
  ngOnInit() {
  }
  ngOnChanges() {
    if (this.selection!="home"){
      var chapter = document.getElementById("section"+this.selection);
    } else {
      var chapter = document.getElementById("home");
    }
    chapter.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}