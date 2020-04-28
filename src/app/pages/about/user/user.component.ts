import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
userId: number;
private unsubscribe = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
   this.getUserId();
  }

  ngOnDestroy(){
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private getUserId(): void {
    this.activatedRoute.params
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(params => {
       this.userId = params.userId;
      });
  }
}
