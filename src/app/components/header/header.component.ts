import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy, OnChanges {
@Input() title: string;
@Input() subTitle: string;
@Output() testOutput = new EventEmitter<string>();

isLogined = false;
titleFontSize = '36px';

  constructor() { }

  ngOnInit(): void{
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngOnDestroy(): void {

  }
  logIn(event): void {
    this.isLogined = !this.isLogined;
    console.log('logIn', event);
    this.testOutput.emit('Header login works');
  }

}
