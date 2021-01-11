import { Component } from '@angular/core';
import { Hero } from './Hero'
@Component({
  selector: 'my-app',
  // template: `<h1>{{title}}</h1>
  // 			<h2>My favorite hero is {{hero}}</h2>`
  templateUrl: 'app/partials/app.component.html'
})
export class AppComponent { 

	title = 'Mo\'s tour of Heros';
	heroes = [
	  new Hero(1, 'Windstorm'),
	  new Hero(13, 'Bombasto'),
	  new Hero(15, 'Magneta'),
	  new Hero(20, 'Tornado')
	];
	myHero = this.heroes[0];

}