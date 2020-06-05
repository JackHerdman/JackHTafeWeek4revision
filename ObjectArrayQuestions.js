// Q1 - Create an array of objects called libraries. Each should have the following properties: name which should be a string, address which should be a string and headLibrarian which should be an object with properties name and age.
let libraries = [{
    name: "Gladesville",
    Address: "6 Pittwater Road, Gladesville NSW 2111",
    headLibrarian: {
        name: "Josie Gladespire",
        age: 54
    }
}, {
    name: "North Ryde",
    Address: "201 Coxs Road, North Ryde NSW 2113",
    headLibrarian: {
        name: "Nolan North",
        age: 29
    }
}, {
    name: "Ryde",
    Address: "1 Pope St, Ryde NSW 2112",
    headLibrarian: {
        name: "Ruby Rider",
        age: 77
    }
}];

// Q2 - For each Library, add a property called books which sholuld be an array of objects. Each book should have the following properties: title, author, yearOfPublication
libraries[0].books = [{
    title: "The Name of the Wind",
    author: " Patrick Rothfuss",
    yearOfPublication: 2007
}, {
    title: "The Magician's Guild",
    author: "Trudi Canavan",
    yearOfPublication: 2001
}, {
    title: "Nevernight",
    author: "Jay Kristoff",
    yearOfPublication: 2016
}];

libraries[1].books = [{
    title: "Mistborn: The Final Empire",
    author: "Brandon Sanderson",
    yearOfPublication: 2006
}, {
    title: "Ready Player One",
    author: "Ernest Cline",
    yearOfPublication: 2011
}, {
    title: "Red Rising",
    author: "Pierce Brown",
    yearOfPublication: 2014
}];

libraries[2].books = [{
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    yearOfPublication: 1954
}, {
    title: "Ice Station",
    author: "Matthew Reilly",
    yearOfPublication: 1998
}, {
    title: "The Eye of the World",
    author: "Robert Jordan",
    yearOfPublication: 1984
}];
// console.log(libraries)

// Q3 - Use for..of and/or for..in loops to write the book titles across all the libraries that have been published in the last 20 years.
console.log();
console.log("The Following Titles have been published in the last 20 years.");
for (let library of libraries) {
    for (let book of library.books) {
        if (book.yearOfPublication >= 2000) {
            console.log(book.title)
        }
    }
}

// Q4 - Use for..of and/or for..in loops to write all of the authors of books that appear in a library with a librarian that is under 30 years old.
console.log();
console.log("The following Authors are in a library run by a Head Librarian under 30 years old");
for (let library of libraries) {
    if (library.headLibrarian.age <= 30) {
        for (let book of library.books) {
            console.log(book.author)
        }
    }
}

// Q5 - Use for..of and/or for loops to write all the names of libraries that have at least 3 books published before 2000
console.log();
console.log("The Following libraries have at least 3 books published before 2000")
for (const library of libraries) {
    let countYear = 0
    for (let book of library.books) {
        if (book.yearOfPublication < 2000) {
            countYear++;
        }
    }
    if (countYear >= 3) {
        console.log(library.name)
    }
}