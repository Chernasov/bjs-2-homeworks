class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;	
	}
	
	set state(state) {
		if (state < 0) {
			this._state = 0
		} else if (state > 100) {
			this._state = 100
		} else {
			this._state = state
		}	
	}
	
	get state() {
		return this._state
	}
	
	fix() {
		this.state = this.state * 1.5
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}
	
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}
	
	findBookBy(type, value) {
		const item = this.books.find((book) => book[type] === value);
		if (item === undefined) {
			return null;
		}
		return item;
	}
	
	giveBookByName(bookName) {
		const index = this.books.findIndex((book) => book.name === bookName);
		if (index === -1) {
			return null;
		}
		return this.books.splice(index, 1)
	}
}

class Student {
	constructor(name) {
		this.name = name;
	}
	
	addMark(mark, subject) {
		if (mark < 1 || mark > 5) {
			return "Ошибка, оценка должна быть числом от 1 до 5"
		}
		if (this[subject] === undefined) {
			this[subject] = [];
		}
		this[subject].push(mark)
	}
	
	getAverageBySubject(subject) {
		if (this[subject] === undefined) {
			return "Несуществующий предмет";
		}
		const sum = this[subject].reduce((acc, mark) => acc + mark);
		return sum / this[subject].length;
	}
	
	getAverage() {
		let sumLength = 0;
		let summ = 0;
		for (const [key, value] of Object.entries(this)) {
			if (key === 'name') {
				continue
			}
			const sum = value.reduce((acc, mark) => acc + mark);
			summ += sum;
			sumLength += value.length;
		}
		return summ / sumLength;
	}
	
	exclude(reason) {
		this.excluded = reason;
		for (const key of Object.keys(this)) {
			if (key === 'name') {
				continue
			}
			delete key;
		}
	}
}