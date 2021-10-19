import { Component, OnInit } from '@angular/core';
import { IWidget } from '../widget.interface';
import { WIDGET_TOKEN } from '../widget.token';

@Component({
  selector: 'app-velocity-widget',
  templateUrl: './velocity-widget.component.html',
  styleUrls: ['./velocity-widget.component.css'],
  providers: [
    {
      provide: WIDGET_TOKEN,
      useExisting: VelocityWidgetComponent,
    },
  ],
})
export class VelocityWidgetComponent implements OnInit, IWidget {
  isRefreshing = false;

  constructor() {}

  ngOnInit(): void {}

  load(): void {
    console.log('load data from VELOCITY API...');
  }

  refresh(): void {
    this.isRefreshing = true;
    setTimeout(() => {
      this.isRefreshing = false;
    }, 2500);
  }
}
