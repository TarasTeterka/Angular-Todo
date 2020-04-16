import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  // subName = 'Education';
  dataList = ['Angular' , 'Js', 'SCSS'];

  constructor() { }

  ngOnInit(): void {
  }




//   addItem(item: string): void{
// this.dataList.push(item);
//   }
}
