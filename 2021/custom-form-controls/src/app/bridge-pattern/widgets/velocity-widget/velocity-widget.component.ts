import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-velocity-widget',
  templateUrl: './velocity-widget.component.html',
  styleUrls: ['./velocity-widget.component.css']
})
export class VelocityWidgetComponent implements OnInit {

  isRefreshing = false;

  constructor() { }

  ngOnInit(): void {
  }

  load(): void {
    console.log('load data from VELOCITY API...');
  }

  refresh(): void {
    this.isRefreshing = true;
    setTimeout(()=>{
      this.isRefreshing= false;
    }, 2500);
  }

}
