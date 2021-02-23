import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

  isLoading = false;

  constructor() { }

  ngOnInit(): void {
  }

  loadData(): void {
    console.log('load data from WEATHER API...');
  }

  refresh(): void {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

}
