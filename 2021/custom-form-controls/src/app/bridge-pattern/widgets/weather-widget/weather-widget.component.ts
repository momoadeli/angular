import { Component, OnInit } from '@angular/core';
import { IWidget } from '../widget.interface';
import { WIDGET_TOKEN } from '../widget.token';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
  providers: [
    {
      provide: WIDGET_TOKEN,
      useExisting: WeatherWidgetComponent,
    },
  ],
})
export class WeatherWidgetComponent implements OnInit, IWidget {
  isLoading = false;

  constructor() {}

  ngOnInit(): void {}

  load(): void {
    console.log('load data from WEATHER API...');
  }

  refresh(): void {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
