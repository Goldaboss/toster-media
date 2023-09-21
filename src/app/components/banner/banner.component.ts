import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, timer } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, OnDestroy {
  public oldPrice: string = '250.00';
  public newPrice: string = '160.00';
  private destroyed$ = new Subject<void>();
  rxjsTimer = timer(1000, 1000);

  public toDay: any = new Date();
  public limitTime: any;
  private year: any;
  private month: any;
  private day: any;

  constructor() {}

  ngOnInit(): void {
    this.year = this.toDay.getFullYear();
    this.month = this.toDay.getMonth();
    this.day = this.toDay.getDate();

    const finishTime = new Date(
      this.year,
      this.month,
      this.day,
      23,
      59,
      59,
      999,
    );

    this.rxjsTimer.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      const now = new Date();
      this.limitTime = moment
        .utc(
          moment(finishTime, 'DD/MM/YYYY HH:mm:ss').diff(
            moment(now, 'DD/MM/YYYY HH:mm:ss'),
          ),
        )
        .format('HH:mm:ss');
    });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
