import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  List: Array<any>;

  constructor(private user: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }
  private getUsers(): void {
    this.user.getUsers().subscribe(
      (data) => {
        this.List = data;
        // console.log(this.List);
      },
      (error) => {}
    );
  }
}
