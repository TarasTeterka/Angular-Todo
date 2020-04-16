import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headerTitle = 'Angular-2Do';
  headerSubTitle = 'Educational project for study Angular.';
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  testOutputApp(data: string): void{
    // console.log(data)
    this.headerSubTitle = data;
  }
}
