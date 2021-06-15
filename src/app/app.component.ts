import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

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
  index: Array<string> = ['intro', 'sezione1', 'sezione2', 'sezione3'];

  selection: string = undefined;
  subtitle: string = "";
  /*isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen;
  }*/
  change(node: any, color: string) {
    node.style.fill = color;
    let section = document.getElementById('nav').children[node.id];
    }

  showChapter(n: string){
    this.selection = n;
    this.subtitle = this.index[n];
  }

  test(){
  //  alert("funge");
  }

  ngOnInit() {
    for (let i = 0; i < this.logoIndex.length; i++) {
      let elem = this.logoIndex[i];
      elem.addEventListener(
        'mouseover',
        () => this.change(elem, '#eb836a'),
        false
      );
      elem.addEventListener(
        'mouseout',
        () => this.change(elem, '#d7232a'),
        false
      );
      elem.addEventListener('click', () => this.showChapter(elem.id), false);
    }
  }
}