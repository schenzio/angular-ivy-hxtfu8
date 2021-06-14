import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'la povertà sanitaria';
  exp: string = 'clicca sulle parti del logo';
  logoIndex = document.getElementsByClassName('chap');
  index = ['intro', 'parte1', 'parte2', 'parte3', 'parte4'];
  section: number = 0;

  change(node: any, color: string) {
    node.style.fill = color;
  }

  test() {
    console.log(this.logoIndex);
  }
  showChapter(n){
    alert(n);
    this.section = n
    //this.section = this.index[n];
    /*switch(n){
      case 1: {alert("botta1")};
      case 2: alert("botta2") 
    }*/
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
      elem.addEventListener('click', () => this.showChapter(i), false);
    }
  }
}
