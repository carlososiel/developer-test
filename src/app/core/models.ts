export interface Book {
	_id?: string | number;
	isbn: string;
	title: string;
	author: string;
	category: string;
	published_year: string;
	publisher: string;
	created_date: Date;
	updated_date: Date;
}

export interface Category {
	_id?: string | number;
	name: string;
	created_date: Date;
	updated_date: Date;
}

export interface Author {
	_id?: string | number;
	name: string;
	lastname: string;
	formatedName?: string;
	created_date: Date;
	updated_date: Date;
}
