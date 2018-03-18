import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: [ './navbar.component.css' ]
})
export class NavbarComponent implements OnInit {
	routes = [];

	constructor() {}

	ngOnInit() {
		this.routes = [
			{ name: 'Book', url: 'books' },
			{ name: 'Category', url: 'categories' },
			{ name: 'Author', url: 'authors' }
		];
	}
}
