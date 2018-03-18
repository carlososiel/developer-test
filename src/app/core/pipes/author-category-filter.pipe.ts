import { Book } from './../models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'authorCategoryFilter'
})
export class AuthorCategoryFilterPipe implements PipeTransform {
	transform(data: Book[], author: string, category: string): any {
		if (this.isNull(author) && this.isNull(category)) {
			return data;
		} else {
			return data.filter((item) => {
				if (!this.isNull(author) && this.isNull(category)) {
					return item.author === author;
				} else if (!this.isNull(category) && this.isNull(author)) {
					return item.category === category;
				} else {
					return item.author === author && item.category === category;
				}
			});
		}
	}

	private isNull(value: string | null) {
		return value === 'null' || typeof value === null;
	}
}
