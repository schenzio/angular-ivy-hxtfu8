import { Component, OnInit, HostListener} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { WindowRefService } from './window-ref.service';
export class chapter {
  title: string;
  hover: boolean
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        display: 'block',
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

export class AppComponent implements OnInit {
  title: string = 'la povertà sanitaria';
  exp: string = 'clicca sulle parti del logo';
  logoIndex: HTMLCollection = document.getElementsByClassName('chap');
  index: Array<chapter> = [
    {title: 'intro', hover: false}, 
    {title: 'sezione1', hover: false}, 
    {title: 'sezione2', hover: false}, 
    {title: 'sezione3', hover: false}
  ];
  selection: string;
  constructor(private winRef: WindowRefService) {
    // getting the native window obj
    console.log('Native window obj', winRef.nativeWindow);
}
  //subtitle: string = "";
  /*isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen;
  }*/

  focus(id: any) {
    this.index[id].hover=true;
    document.getElementById(id).style.fill = '#eb836a';
    }
  defocus(id: any){
      this.index[id].hover=false;
      if(id == '3'){
        document.getElementById(id).style.fill = 'white';
      } else {
        document.getElementById(id).style.fill = '#d7232a';
      }
  }
  showChapter(n){
    this.selection = n;
    //this.subtitle = this.index[n].title;
     if (this.selection!="home"){
      var chapter = document.getElementById("section"+this.selection);
    } else {
      var chapter = document.getElementById("home");
    }
    chapter.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  
  }

  test(){
  //  alert("funge");
  }

  ngOnInit() {
    document.getElementById('3').style.fill = 'white';
    for (let i = 0; i < this.logoIndex.length; i++) {
      let elem = this.logoIndex[i];
      elem.addEventListener(
        'mouseover',
        () => this.focus(elem.id),
        false
      );
      elem.addEventListener(
        'mouseout',
        () => this.defocus(elem.id),
        false
      );
      elem.addEventListener('click', () => this.showChapter(elem.id), false);
    }
  }
}