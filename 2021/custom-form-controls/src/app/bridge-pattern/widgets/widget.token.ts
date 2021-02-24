import { InjectionToken } from '@angular/core';
import { IWidget } from './widget.interface';

export const WIDGET_TOKEN: InjectionToken<IWidget> = new InjectionToken<IWidget>(
  'IWidget token'
);
