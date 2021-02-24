import { Component, ContentChild, OnInit } from '@angular/core';
import { VelocityWidgetComponent } from '../widgets/velocity-widget/velocity-widget.component';
import { IWidget } from '../widgets/widget.interface';
import { WIDGET_TOKEN } from '../widgets/widget.token';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.css'],
})
export class WidgetWrapperComponent implements OnInit {
  @ContentChild(WIDGET_TOKEN)
  widget: IWidget;

  ngOnInit(): void {}

  onRefresh(): void {
    // eslint-disable-next-line no-console
    console.log('Widget Wrapper onRefresh() called...');

    this.widget.refresh();
  }
}
