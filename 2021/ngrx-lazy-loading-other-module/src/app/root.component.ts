import { Component } from '@angular/core';

@Component({
    selector: 'app-lazy-loaded',
    template: "<h1>ROOT COMPONENT</h1><br /><a routerLink='../lazy'>Go to lazy</a>"
})
export class RootComponent {
}