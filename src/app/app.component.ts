import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export class chapter {
  title: string;
  weight: boolean
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
  //index: Array<string> = ['intro', 'sezione1', 'sezione2', 'sezione3'];
  index: Array<chapter> = [
    {title:'intro', weight: false}, 
    {title: 'sezione1', weight: false}, 
    {title: 'sezione2', weight: false}, 
    {title: 'sezione3', weight: false}
  ];
  selection: string = undefined;
  subtitle: string = "";
  /*isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen;
  }*/
  focus(id) {
    this.index[id].weight=true;
    document.getElementById(id).style.fill = '#eb836a';
    }
  defocus(id){
      this.index[id].weight=false;
      if(id == '3'){
        document.getElementById(id).style.fill = 'white';
      } else {
        document.getElementById(id).style.fill = '#d7232a';
      }
  }
  showChapter(n: string){
    this.selection = n;
    this.subtitle = this.index[n];
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